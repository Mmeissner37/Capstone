import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import ProfilePresenter from "../../components/ProfilePresenter/ProfilePresenter";
import axios from 'axios';
import './ProfilePage.css'

const ProfilePage = () => {
  const [user, token] = useAuth();
  const [pets, setPets] = useState([]);
  const [searchInput, setSearchInput] = useState([]);


  useEffect (() => {
    const getPets = async() => {
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
    getPets();
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
      <div className="profilepage">
        <div className='profile-header'>
            <h2>{user.username}'s Pets</h2><br></br>
        </div>
        <div className='container'>
            <div className='search-pets'>
                <h3>Looking for a particular pet?</h3>
                    <form onSubmit={handleSubmit}>
                        <label className='search'>Search: </label>
                        <input onChange={(e) => setSearchInput(e.target.value)} type="text" placeholder='Search by Pet Name' /><br></br>
                        <br></br>
                        <button>Let's take a look!</button>
                    </form>
            </div>
        </div>
        <div className="container-lg">
            <ProfilePresenter />
        </div>
        <br></br>
        <div className='footer'>
            <a href="/profiles">
            <img src="http://clipart-library.com/images/8cAEyLKni.png" height='50px' width='50px' alt="cat" />
            </a>
            <h5>Go Back to the Top</h5>
            <br></br>
        </div>
    </div>
    );
}
 
export default ProfilePage;

