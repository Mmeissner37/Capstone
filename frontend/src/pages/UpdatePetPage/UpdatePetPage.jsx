import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';


const UpdatePet = () => {
    const [update, setUpdate] = useState([]);
    const [user, token] = useAuth();
    const [pets, setPets] = useState([]);

    useEffect(() => {
        updatePet();
    }, [token]);

    async function updatePet() {
        let response = await axios.put('http://127.0.0.1:8000/pets/alterpet/1/');
        setUpdate(response.data)
        console.log(response.data)
    }


    return ( 
        <div>
            <h3>Update Your Pet!</h3>
            <div className='profiles'>
                {pets &&
                pets.map((petprofile) =>
                    <ol key={petprofile.id}>
                        <div className='present-profile'>
                            ID: {petprofile.id}<br></br>
                            Name: {petprofile.pet_name}<br></br>
                            Species: {petprofile.species}<br></br>
                            Breed: {petprofile.breed}<br></br>
                            Date of Birth: {petprofile.date_of_birth}<br></br>
                            <br></br>
                        </div>
                    </ol>)}<br></br>
            </div>
        </div>
     );
}
 
export default UpdatePet;