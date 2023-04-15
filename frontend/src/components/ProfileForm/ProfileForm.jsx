import React from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import useCustomForm from "../../hooks/useCustomForm";
import { useNavigate } from "react-router-dom";


let initialValues = {
    pet_name: "",
    species: "",
    breed: "",
    date_of_birth: "",
}

const ProfileForm = () => { 
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, createPet)

    async function createPet() {
        try {
            let response = await axios.post('http://127.0.0.1:8000/pets/newpet/', formData, {
                headers: { 
                    Authorization: 'Bearer ' + token
                }
            })
            navigate("/profiles")
        } catch (error) {
            console.log(error.response.data)
        }
    }

    return ( 
        <div className="container">
            <h3>Add New Pets!</h3><br></br>
            <form className="form" onSubmit={handleSubmit}>
                <label>Pet Name: {" "}
                <input type='text' name='pet_name' value={formData.pet_name} onChange={handleInputChange} /></label>
                <label>Species: {" "}
                <input type="text" name='species' value={formData.species} onChange={handleInputChange} /></label>
                <label className="pet-form">Breed: {" "}
                <input type="text" name='breed' value={formData.breed} onChange={handleInputChange} /></label>
                <label className="pet-form">Date of Birth: {" "}
                <input type="date" name='date_of_birth' value={formData.date_of_birth} onChange={handleInputChange} /></label>
                <button>Add PawPrints</button>
            </form>
        </div>
     );
}
 
export default ProfileForm;