import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth';


const PrescriptionPresenter = () => {
    const [user, token] = useAuth();
    const [meds, setMeds] = useState([]);

    useEffect (() => {
        const fetchMeds = async() => {
            try {
                let response = await axios.get('http://127.0.0.1:8000/both/all/', {
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
                meds.filter((pet_prescription) =>
                    <ul key={pet_prescription.id}>
                        Pet Name: {pet_prescription.pet_name}<br></br>
                        Prescription: {pet_prescription.prescription}<br></br>
                    </ul>
                )}
            </div>

        </div>
     );
}
 
export default PrescriptionPresenter;