import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth';



const CalendarForm = () => {
    const [user, token] = useAuth();
    const [appt, setAppt] = useState([]);


    return ( 
        <div>
            <form>
                <label>Schedule Appointment</label>
            </form>
        </div>
     );
}
 
export default CalendarForm;