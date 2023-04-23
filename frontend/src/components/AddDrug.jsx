import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import useCustomForm from "../hooks/useCustomForm";

let initialValues= {
    pet_id: " ",
    pet_name: " ",
    prescription_id: " ",
    prescription: " ",
}

const AddDrug = () => {
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, putDrug)
    //Add onClick event to travel to /createdrug page OR alert to rx form??

    async function putDrug() {
        try{
            let response = await axios.post('http://127.0.0.1:8000/both/all/', formData, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            navigate('/createdrug')
        } catch (error) {
            console.log(error.message)
        }
    }

    return ( 
        <button type="button">Add Medications</button>   
     );
}
 
export default AddDrug;



