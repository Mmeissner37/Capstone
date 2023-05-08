import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PetDrugs from './PetDrugs';
import useAuth from '../hooks/useAuth';


const VetProfilePresenter = () => {
    const [user, token] = useAuth();
    const [pets, setPets] = useState([]);
    const navigate = useNavigate();
    

    useEffect (() => {
        const fetchPets = async() => {
            try {
                let response = await axios.get('http://127.0.0.1:8000/pets/vet/', {
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
            <div>
                <div className='vetsorter'>
                {pets &&
                pets.map((petprofile) =>
                    <ol key={petprofile.id}>
                        <div className='vetprofile'>
                            <div className='vetindiv-profile'>
                                Owner: {petprofile.user.username}<br></br>
                                ID: {petprofile.id}<br></br>
                                Pet Name: {petprofile.pet_name}<br></br>
                                Species: {petprofile.species}<br></br>
                                Breed: {petprofile.breed}<br></br>
                                Date of Birth: {petprofile.date_of_birth}<br></br>
                                <div>
                                    <h4>Add Profile Picture:</h4>
                                    <img src= {`http://127.0.0.1:8000${petprofile.image_url}/`} height='250px' width='200px' alt='Profile image'/>
                                </div>
                            </div>
                                Medications: 
                            <div className='profiledrugs'>
                                <PetDrugs petID={petprofile.id} />
                            </div>
                            <br></br>
                        </div>
                    </ol>)}<br></br>
                </div>
            </div>
        </div>
    )
}

export default VetProfilePresenter;
