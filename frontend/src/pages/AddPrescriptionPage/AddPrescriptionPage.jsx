import React, { useState, useEffect } from 'react';
import useCustomForm from '../../hooks/useCustomForm';

import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


let initialValues= {
    drug_name: " ",
    drug_dose: " ",
    drug_instr: " ",
}

const AddPrescription = () => {
    const [user, token]= useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, createDrug)

    async function createDrug() {
        try {
            let response = await axios.post('http://127.0.0.1:8000/drugs/make/', formData, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            navigate('/profiles')
        } catch (error) {
            console.log(error.response.data)
        }
    }

    return ( 
        <div className='container-md'>
            <button>Add Medications</button>
        </div>
     );
}
 
export default AddPrescription;