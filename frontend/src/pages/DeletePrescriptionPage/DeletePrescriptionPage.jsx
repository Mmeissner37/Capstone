import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PrescriptionPresenter from '../../components/PrescriptionPresenter';


let initialValues= {
    prescription_id: " ",
    drug_name: " ",
}

const DeletePrescriptionPage = () => {
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postDrug)

    async function postDrug(prescription_id){
        try {
            let response = await axios.delete(`http://127.0.0.1:8000/drugs/${prescription_id}`, formData, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            navigate('/profiles')
        } catch (error) {
            console.log(error.message)
        }
    }

    return ( 
        <div className='container'>
            <h2>Select Prescription to Delete</h2><br></br>
            <form className='form' onSubmit={handleSubmit}>
                <label>Prescription ID: {' '}
                    <input type='text' name="prescription_id" value={formData.prescription_id} onChange={handleInputChange} />
                </label>
                <label>Prescription Name: {' '}
                    <input type='text' name="drug_name" value={formData.drug_name} onChange={handleInputChange} />
                </label>
                <button>Delete</button><br></br>
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
 
export default DeletePrescriptionPage;