import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth';


const ProfileList = () => {
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
        <div className='petlist'>
            {pets &&
            pets.map((petprofile) =>
                <ul key={petprofile.id}>
                    <div className='petlist'>
                        ID: {petprofile.id}<br></br>
                        Name: {petprofile.pet_name}<br></br>
                        Species: {petprofile.species}<br></br>
                        Breed: {petprofile.breed}<br></br>
                        Date of Birth: {petprofile.date_of_birth}<br></br>
                        <br></br>
                    </div>
                </ul>)}<br></br>
        </div>
    )
}

export default ProfileList;