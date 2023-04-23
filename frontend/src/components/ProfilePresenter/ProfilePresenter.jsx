import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import PetDrugs from '../PetDrugs';
import AddDrug from '../AddDrug';
import CreateImage from '../CreateImageForm';
import DisplayPicture from '../DisplayPicture/DisplayPicture';


const ProfilePresenter = () => {
    const [user, token] = useAuth();
    const [pets, setPets] = useState([]);
    const navigate = useNavigate();

    useEffect (() => {
        const fetchPets = async() => {
            try {
                let response = await axios.get('http://127.0.0.1:8000/pets/', {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                });
                setPets(response.data);
            } catch (error) {
                console.log(error.response.data)
            }
        };
        fetchPets();
    }, [token]);

    return (
        <div>
            <div className='profile-header'>
                <h2>{user.username}'s Pets</h2><br></br>
            </div>
            <div className='profiles'>
                {pets &&
                pets.map((petprofile) =>
                    <ol key={petprofile.id}>
                        <div className='present-profile'>
                            <CreateImage petID={petprofile.id}/>
                            <DisplayPicture />
                            ID: {petprofile.id}<br></br>
                            Name: {petprofile.pet_name}<br></br>
                            Species: {petprofile.species}<br></br>
                            Breed: {petprofile.breed}<br></br>
                            Date of Birth: {petprofile.date_of_birth}<br></br>
                            Medications: 
                            <PetDrugs petID={petprofile.id} />
                            <button onClick={() => navigate('/updatepet')}>Update Profile</button>
                            <button>Delete Profile</button>
                            <AddDrug />
                            <br></br>
                        </div>
                    </ol>)}<br></br>
                {/* <AddDrug /> */}
            </div>
        </div>
    )
}

export default ProfilePresenter;


// <Link to='/createdrug'>Add Medications</Link> 