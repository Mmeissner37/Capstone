import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import CalendarForm from './CalendarForm';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";


const MyCalendar = () => {
    const [user, token]= useAuth();
    const [appts, setAppts] = useState([]);
    const [events, setEvents] = useState([]);


    useEffect (() => {
        getAppts();
    }, [token])

    async function getAppts() {
            let response = await axios.get('http://127.0.0.1:8000/appts/all/', {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            });
        setAppts();
    }
    
    // const eventClick = (info) => {
    //     const {title, appt_date, start, end} = info;
    //     const eventPrompt = prompt(<CalendarForm />)
    //     if (eventPrompt) {
    //         setEvents([...events, 
    //             {
    //                 title: title, 
    //                 appt_date: appt_date,
    //                 start: start,
    //                 end: end, 
    //             },
    //         ]);
    //     }
    // };


    return (
        <div className="calendar">
            {/* <button onClick={() => getAppts()}>See Appointments</button> */}
            <FullCalendar 
                weekends={false}
                editable={true}
                selectable={true}
                // events ={info}
                select = {appts}
                initialView='dayGridMonth'
            headerToolbar= {{
                start: 'today prev,next', 
                center: 'title',
                end: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            businessHours= {{
                daysOfWeek: [1, 2, 3, 5],
                start: '10:00',
                end: '16:00',
            }}
            // eventContent={(info) => <EventItem info={info} />}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} 
            views={['dayGridWeek', 'dayGridDay','dayGridMonth']}
            />
        </div>
    )
}

export default MyCalendar;


    // const EventItem = ({info}) => {
    //     const {event} = info;
    //     return(
    //         <div>
    //             <ul>{event.title}</ul>
    //             <ul>{event.appt_date}</ul>
    //             <ul>{event.start}</ul>
    //             <ul>{event.end}</ul>
    //         </div>
    //     );
    // };
