import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ProfilePresenter.css'

import PetDrugs from '../PetDrugs';
import CreateImage from '../CreateImageForm';


const ProfilePresenter = () => {
    const [user, token] = useAuth();
    const [pets, setPets] = useState([]);
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState([]);
    

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

    
function handleSubmit(e) {
    e.preventDefault();
    filterPets(searchInput)
}

function filterPets(searchInput) {
    let filteredResults = pets.filter((el) =>{
        if (el.pet_name.includes(searchInput)) {
            return true;
        }
    })
    setPets(filteredResults);
}

    return (
        <div>
            <div className='container'>
                <div className='search-pets'>
                    <form onSubmit={handleSubmit}>
                        <label className='search'>Search: </label>
                        <input onChange={(e) => setSearchInput(e.target.value)} type="text" placeholder='Search by Pet Name' /><br></br>
                        <br></br>
                        <button>Search</button>
                    </form>
                </div>
            </div>
            <div className='pet-sorter'>
                {pets &&
                pets.map((petprofile) =>
                    <ol key={petprofile.id}>
                        <div className='present-profile'>
                            <h3>{petprofile.pet_name}</h3>
                            <div className='indiv-profile'>
                                ID: {petprofile.id}<br></br>
                                Species: {petprofile.species}<br></br>
                                Breed: {petprofile.breed}<br></br>
                                Date of Birth: {petprofile.date_of_birth}<br></br>
                                <div>
                                    <h4>Profile Picture:</h4>
                                    <img src= {`http://127.0.0.1:8000${petprofile.image_url}/`} height='250px' width='200px' alt='Profile image'/>
                                    <CreateImage petID={petprofile.id}/>
                                </div>
                            </div> 
                            <div className='profiledrugs'>
                                Medications:
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
