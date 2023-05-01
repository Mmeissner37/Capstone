import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PrescriptionPresenter from '../../components/PrescriptionPresenter';



const UpdateDrugPage = () => {
    const [user, token] = useAuth();
    const navigate = useNavigate();
    const [prescription_id, setDrugID] = useState('');
    const [drug_name, setDrugName] = useState('');
    const [drug_dose, setDrugDose] = useState('');
    const [drug_instr, setDrugInstr] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        let updateDrug = {
            prescription_id: ' ',
            drug_name: ' ',
            drug_dose: ' ',
            drug_instr: ' ',
        }
        modifyDrug(updateDrug)
    }

    // useEffect (() => {
    //     modifyDrug()
    // }, [token] )

    async function modifyDrug(updateDrug){
        try {
            let response = await axios.put(`http://127.0.0.1:8000/drugs/${prescription_id}/`, updateDrug, {
                headers: {
                    Authorization: 'Bearer ' + token
                },
            })
            navigate('/profiles')
        } catch (error) {
            console.log(error.message)
        }
    }

    return ( 
        <div className='container'>
            <h2>Select Prescription to Update</h2><br></br>
            <form className='form' onSubmit={handleSubmit}>
                <label>Prescription ID: {' '}
                    <input type='text' name="prescription_id" value={prescription_id} onChange={(e) => setDrugID(e.target.value)} />
                </label>
                <label>Prescription Name: {' '}
                    <input type='text' name="drug_name" value={drug_name} onChange={(e) => setDrugName(e.target.value)} />
                </label>
                <label>Prescription Dose: {' '}
                    <input type='text' name="drug_dose" value={drug_dose} onChange={(e) => setDrugDose(e.target.value)} />
                </label>
                <label>Prescription Instructions: {' '}
                    <input type='text' name="drug_instr" value={drug_instr} onChange={(e)=> setDrugInstr(e.target.value)} />
                </label>
                <button>Update</button><br></br>
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
 
export default UpdateDrugPage;

