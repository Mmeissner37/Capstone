import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import useCustomForm from '../hooks/useCustomForm';

let initialValues={
    title:'',
    appt_date: '',
    start: '',
    end: '',
}

const CalendarForm = () => {
    const [user, token] = useAuth();
    const navigate = useNavigate();
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postAppt)

    async function postAppt() {
        try {
            let response = await axios.post('http://127.0.0.1:8000/appts/', formData, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });
            navigate('/')
        } catch (error) {
            console.log(error.response.data)
        }
    }

    return ( 
        <div>
            <h3>Use this form to schedule an appointment</h3><br></br>
            <form className='schedule-form' onSubmit={handleSubmit}>
                <label>Name of Pet and Reason for Visit: {" "}
                <input type='text' name='title' value={formData.title} onChange={handleInputChange} /></label><br></br>
                <label>Appointment Date: {" "}
                <input type='date' name='appt_date' value={formData.appt_date} onChange={handleInputChange} /></label><br></br>
                <label>Start Time: {" "}
                <input type='time' name='start' value={formData.start} onChange={handleInputChange} /></label><br></br>
                <label>End Time: {" "}
                <input type='time' name='end' value={formData.end} onChange={handleInputChange} /></label><br></br>
                <button>Submit</button>
            </form>
        </div>
     );
}
 
export default CalendarForm;