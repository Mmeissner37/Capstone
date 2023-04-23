import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth';


const PrescriptionPresenter = () => {
    const [user, token] = useAuth();
    const [meds, setMeds] = useState([]);

    useEffect (() => {
        const fetchMeds = async() => {
            try {
                let response = await axios.get('http://127.0.0.1:8000/drugs/', {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                });
                setMeds(response.data);
            } catch (error) {
                console.log(error.response.data)
            }
        };
        fetchMeds();
    }, [token]);

    return ( 
        <div className='container'>
            <div className='petdrugs'>
                {meds && 
                meds.map((prescription) =>
                    <ul key={prescription.id}>
                        <br></br>
                        ID: {prescription.id}<br></br>
                        Drug Name: {prescription.drug_name}<br></br>
                        Drug Dose: {prescription.drug_dose}<br></br>
                        Drug Instructions: {prescription.drug_instr}<br></br>
                    </ul>
                )}
            </div>
        </div>
     );
}

export default PrescriptionPresenter;


