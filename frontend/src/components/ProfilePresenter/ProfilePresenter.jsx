import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

import AddPicture from '../AddPicture/AddPicture';
import { Link } from 'react-router-dom';
import PetDrugs from '../PetDrugs';
import AddDrug from '../AddDrug';
import CreateImage from '../CreateImageForm';


const ProfilePresenter = () => {
    const [user, token] = useAuth();
    const [pets, setPets] = useState([]);

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
        <div className='container'>
            <div className='profile-header'>
                <h2>{user.username}'s Pets</h2><br></br>
            </div>
            <div className='profiles'>
                {pets &&
                pets.map((petprofile) =>
                    <ol key={petprofile.id}>
                        <div className='present-profile'>
                            <AddPicture />
                            <CreateImage />
                            ID: {petprofile.id}<br></br>
                            Name: {petprofile.pet_name}<br></br>
                            Species: {petprofile.species}<br></br>
                            Breed: {petprofile.breed}<br></br>
                            Date of Birth: {petprofile.date_of_birth}<br></br>
                            Medications: 
                            <PetDrugs petID={petprofile.id} />
                            <br></br>
                        </div>
                    </ol>)}<br></br>
                <AddDrug />
            </div>
        </div>
    )
}

export default ProfilePresenter;


// <Link to='/createdrug'>Add Medications</Link> 