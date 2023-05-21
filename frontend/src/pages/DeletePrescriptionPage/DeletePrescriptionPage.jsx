import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import './DeletePrescriptionPage.css';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PrescriptionPresenter from '../../components/PrescriptionPresenter';


const DeletePrescriptionPage = () => {
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [prescription_id, setDrugID] = useState('');
    const [drug_name, setDrugName] = useState('');
    

    function handleSubmit(e) {
        e.preventDefault();
        let drugGone = {
            prescription_id: ' ',
            drug_name: ' ',
        }
        deleteDrug(drugGone)
    }

    async function deleteDrug(drugGone){
        try {
            let response = await axios.delete(`http://127.0.0.1:8000/drugs/${prescription_id}/`, {
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
        <div className='wholepage'>
            <div className='delete-drug-page'>
                <div className='container'>
                    <h2>Select Prescription to Delete</h2><br></br>
                    <br></br>
                    <form className='form' onSubmit={handleSubmit}>
                        <label>Prescription ID: {' '}
                            <input type='text' value={prescription_id} onChange={(e) => setDrugID(e.target.value)} />
                        </label>
                        <label>Prescription Name: {' '}
                            <input type='text'  value={drug_name} onChange={(e) => setDrugName(e.target.value)} />
                        </label>
                        <button>Delete</button><br></br>
                    </form>
                </div>
            </div>            
                <div>
                    <PrescriptionPresenter />
                </div>
                <br></br>
                <div className='footer'>
                    <a href="/profiles">
                    <img src="http://clipart-library.com/images/8cAEyLKni.png" height='50px' width='50px' alt="paw print" />
                    </a>
                    <h5>Go Back To Profiles</h5>
                </div>
            </div>
     );
}
 
export default DeletePrescriptionPage;