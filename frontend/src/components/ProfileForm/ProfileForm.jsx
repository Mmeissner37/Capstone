import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";


const ProfileForm = ({createNewProfile}) => {

    const [profile, setProfile] = useState([]);
    const [pet_name, setName] = useState([]);
    const [species, setSpecies] = useState([]);
    const [breed, setBreed] = useState([]);
    const [date_of_birth, setBirth] = useState([]);
    const [user, token] = useAuth()

    function handleSubmit(event) {
        event.preventDefault();
        let newProfile = {
            name: pet_name,
            species: species,
            breed: breed, 
            birth: date_of_birth,
        }
        console.log(newProfile)
        createPet(newProfile)
    }

    async function createPet(newProfile) {
        try {
            let response = await axios.post('http://127.0.0.1:8000/pets/newpet/', newProfile, {
                headers: { 
                    Authorization: 'Bearer ' + token
                }
            })
        } catch (error) {
            console.log(error.response.data)
        }
    }

    return ( 
        <div>
            <form>
                <h3>Add Paw Prints To Your Heart!</h3>
                <label className="pet-form">Pet Name: </label>
                <input type='text' value={pet_name} onChange={(event) => setName(event.target.value)} /><br></br>
                <label className="pet-form">Species: </label>
                <input type="text" value={species} onChange={(event) => setSpecies(event.target.value)} /><br></br>
                <label className="pet-form">Breed: </label>
                <input type="text" value={breed} onChange={(event) => setBreed(event.target.value)} /><br></br>
                <label className="pet-form">Date of Birth: </label>
                <input type="date" value={date_of_birth} onChange={(event) => setBirth(event.target.value)} /><br></br>
                <button onChange={handleSubmit}>Add PawPrints</button>
            </form>
        </div>
     );
}
 
export default ProfileForm;