import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PetDrugs from './PetDrugs';
import useAuth from '../hooks/useAuth';


const VetProfilePresenter = () => {
    const [user, token] = useAuth();
    const [pets, setPets] = useState([]);
    const [searchInput, setSearchInput] = useState([]);
 

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

//SEARCH FUNCTION INCOMPLETE--won't return results
    function handleSubmit(event) {
        debugger
        event.preventDefault();
        filterPets(searchInput)
    }

    function filterPets(searchInput) {
        let filteredResults = pets.filter((el) =>{
            if (el.user.last_name.includes(searchInput)) {
                return true;
            }
        })
        setPets(filteredResults);
    }

    return (
        <div>
            <div>
                <div className='search-vets'>
                    <h2>Search Profiles</h2>
                    <form onSubmit={handleSubmit}>
                        <label className='search'>Search: </label>
                        <input onChange={(event) => setSearchInput(event.target.value)} type="text" placeholder='Search by Owner' /><br></br>
                        <br></br>
                        <button>Find Pets Profiles</button>
                    </form>
                </div>
                <div className='vetsorter'>
                {pets &&
                pets.map((petprofile) =>
                    <ol key={petprofile.id}>
                        <div className='vetprofile'>
                            <div className='vetindiv-profile'>
                                Owner: {petprofile.user.first_name} {petprofile.user.last_name}<br></br>
                                <br></br>
                                ID: {petprofile.id}<br></br>
                                <br></br>
                                Pet Name: {petprofile.pet_name}<br></br>
                                <br></br>
                                Species: {petprofile.species}<br></br>
                                <br></br>
                                Breed: {petprofile.breed}<br></br>
                                <br></br>
                                Date of Birth: {petprofile.date_of_birth}<br></br>
                                <br></br>
                                <div>
                                    <h4>Profile Picture:</h4>
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
