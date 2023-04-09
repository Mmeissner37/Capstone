import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

import AddPicture from '../AddPicture/AddPicture';
import { Link } from 'react-router-dom';


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
            <h2>{user.username}'s Pets</h2>
            <div className='profiles'>
                {pets &&
                pets.map((petprofile) =>
                    <ul key={petprofile.id}>
                        Name: {petprofile.pet_name}<br></br>
                        Species: {petprofile.species}<br></br>
                        Breed: {petprofile.breed}<br></br>
                        Date of Birth: {petprofile.date_of_birth}<br></br>
                        <Link to='/createdrug'>Add Prescriptions</Link>
                        <AddPicture />
                    </ul>)}
            </div>
        </div>

    //    <div>
    //      <ul className="profile-presenter">
    //         Name: {petProfiles.pet_name}<br></br>
    //         Species: {petProfiles.species}<br></br>
    //         Breed: {petProfiles.breed}<br></br>
    //         Date of Birth: {petProfiles.date_of_birth}<br></br>
    //     </ul>
    //    </div>
    )
}

export default ProfilePresenter;