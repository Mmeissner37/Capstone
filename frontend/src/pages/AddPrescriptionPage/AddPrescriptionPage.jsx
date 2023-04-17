import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PrescriptionPresenter from '../../components/PrescriptionPresenter';
import { Link } from 'react-router-dom';


let initialValues= {
    pet_id: " ",
    pet_name: " ",
    prescription_id: " ",
    prescription: " ",
}

const AddPrescriptionPage = () => {
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postDrug)

    async function postDrug(){
        try {
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
        <div className='container'>
            <h2>Enter New Medications</h2><br></br>
            <form className='form' onSubmit={handleSubmit}>
                <label>Pet's ID: {' '}
                    <input type='text' name='pet_id' value={formData.pet_id} onChange={handleInputChange} />
                </label>Pet's Name: {' '}
                <label>
                    <input type='text' name='pet_name' value={formData.pet_name} onChange={handleInputChange} />
                </label>
                <label>Medication ID: {' '}
                    <input type='text' name="prescription_id" value={formData.prescription_id} onChange={handleInputChange} />
                </label>
                <label>Medication: {' '}
                    <input type='text' name="prescription" value={formData.prescription} onChange={handleInputChange} />
                </label>
                <button>Add Medication</button>
            </form>
            <div>
                <PrescriptionPresenter />
            </div>
            <br></br>
            <a href="/profiles">
              <img src="http://clipart-library.com/images/8cAEyLKni.png" height='50px' width='50px' alt="paw print" />
            </a>
            <h5>Go Back To Profiles</h5>
        </div>
     );
}
 
export default AddPrescriptionPage;