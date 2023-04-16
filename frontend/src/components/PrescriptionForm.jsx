import React, { useState, useEffect } from 'react';
import useCustomForm from '../hooks/useCustomForm';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../hooks/useAuth';


let initialValues= {
    drug_name: " ",
    drug_dose: " ",
    drug_instr: " ",
}

const AddPrescription = () => {
    const [petProfile, setPetProfile] = useState([])
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
            navigate('/')
        } catch (error) {
            console.log(error.response.data)
        }
    }

//Note to self!! Name item doesn't work--FIX THIS!!
    return ( 
        <div className='container-md'>
            <h3>Add Medications to Account</h3><br></br>
            <form className='drug-form' onSubmit={handleSubmit}>
                <label>Drug Name: {" "}
                <input type='text' name='drug_name' value={formData.drug_name} onChange={handleInputChange}/></label><br></br>
                <br></br>
                <label>Drug Dose: {" "}
                <input type='text' name='drug_dose' value={formData.drug_dose} onChange={handleInputChange}/></label><br></br>
                <br></br>
                <label>Drug Instructions: {" "}
                <input type='text' name='drug_instr' value={formData.drug_instr} onChange={handleInputChange}/></label><br></br>         
                <br></br>
                <br></br>
                <button>Add Medication</button>
            </form><br></br>
        </div>
     );
}
 
export default AddPrescription;