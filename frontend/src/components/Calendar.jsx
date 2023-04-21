import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";
import useAuth from '../hooks/useAuth';


export const MyCalendar = () => {
    const [events, setEvents] = useState([]);
    const [user, token]= useAuth();

    const eventClick = (info) => {
        const {start, end} = info;
        const eventNamePrompt = prompt('Please enter appointment details here including pet name and reason for visit');
        if (eventNamePrompt) {
            setEvents([...events, 
                {
                    start,
                    end,
                    title: eventNamePrompt,
                    duration: '00:30',
                },
            ]);
        }
    };

    const EventItem = ({info}) => {
        const {event} = info;
        return(
            <div>
                <p>{event.title}</p>
            </div>
        );
    };

    const Sidebar = () =>{
        return (
            <div>
                <h4>Instruction</h4>
                <ul>
                    <li>Select dates to create new appointment</li>
                    <li>Drag, drop, and resize events</li>
                    <li>Click and even to delete it</li>
                </ul>
            </div>

        )
    }

    return (
        <div className="calendar">
            <FullCalendar 
                editable={true}
                selectable={true}
                events = {events}
                select = {eventClick}
                initialView='timeGridWeek'
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
            eventContent={(info) => <EventItem info={info} />}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} 
            views={['dayGridWeek', 'dayGridDay','dayGridMonth']}

            />
        </div>
    )
}








