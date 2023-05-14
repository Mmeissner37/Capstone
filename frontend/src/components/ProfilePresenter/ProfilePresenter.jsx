import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import PetDrugs from '../PetDrugs';
import CreateImage from '../CreateImageForm';


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
            <div>
                {pets &&
                pets.map((petprofile) =>
                    <ol key={petprofile.id}>
                        <div className='present-profile'>
                            <h3>{petprofile.pet_name}</h3>
                            <div className='indiv-profile'>
                                ID: {petprofile.id}<br></br>
                                {/* Name: {petprofile.pet_name}<br></br> */}
                                Species: {petprofile.species}<br></br>
                                Breed: {petprofile.breed}<br></br>
                                Date of Birth: {petprofile.date_of_birth}<br></br>
                                <div>
                                    <h4>Profile Picture:</h4>
                                    <img src= {`http://127.0.0.1:8000${petprofile.image_url}/`} height='250px' width='200px' alt='Profile image'/>
                                    <CreateImage petID={petprofile.id}/>
                                </div>
                            </div>
                                Medications: 
                            <div className='profiledrugs'>
                                <PetDrugs petID={petprofile.id} />
                            </div>
                            <div className='drug-buttons'>
                                <button onClick={()=> navigate('/createdrug')}>Add Medications To Profile</button>
                                <button onClick={()=> navigate('/updatedrug')}>Update A Medication</button>
                                <button onClick={()=> navigate('/deletedrug')}>Delete A Medication</button>
                            </div>
                            <br></br>
                        </div>
                    </ol>)}<br></br>
            </div>
        </div>
    )
}

export default ProfilePresenter;
