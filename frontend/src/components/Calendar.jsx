import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";


const MyCalendar = () => {
    const [user, token]= useAuth();
    const [appts, setAppts] = useState([]);


    useEffect (() => {
        const getAppts = async() => {
            try{
                let response = await axios.get('http://127.0.0.1:8000/appts/all/', {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                });
            } catch (error) {
                console.log(error.response.data)
            }
        };
        getAppts();
    }, [token]);


    return (
        <div className="calendar">
            <FullCalendar 
                weekends={false}
                editable={true}
                selectable={true}
                // events ={info}
                // select = {appts}
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







    // const eventClick = (info) => {
    //     const {title, appt_date, start, end} = info;
    //     const eventPrompt = prompt('Please enter appointment details, including pet name and reason for visit')
    //     if (eventPrompt) {
    //         setEvents([...events, 
    //             {
    //                 start,
    //                 end, 
    //                 title: {eventPrompt},
    //                 duration: '00:30',
    //             },
    //         ]);
    //     }
    // };

    // const EventItem = ({info}) => {
    //     const {event} = info;
    //     return(
    //         <div>
    //             <ul>{event.title}</ul>
    //         </div>
    //     );
    // };
