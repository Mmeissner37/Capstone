import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";


export const MyCalendar = () => {
    const [events, setEvents] = useState([]);

    const eventClick = (info) => {
        const {start, end} = info;
        const eventNamePrompt = prompt('Enter, event name');
        if (eventNamePrompt) {
            setEvents([...events, 
                {
                    start,
                    end,
                    title: eventNamePrompt,
                },
            ]);
        }
    };

    return (
        <div className="calendar">
            <FullCalendar 
                editable 
                selectable
                events = {events}
                select = {eventClick}
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
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} 
            views={['dayGridMonth', 'dayGridWeek', 'dayGridDay']}

            />
        </div>
    )
}


// export const MyCalendar = () => {
//       return (
//         <div className="calendar">
//             <FullCalendar
//                 plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin ]}
//                 initialView="dayGridMonth"
//                 weekends={true}
//                 eventContent={this.render.eventContent}
//                 viewHeight={690}
//                 aspectRatio={2}
//                 eventBackgroundColor="yellow"
//                 headerToolbar={
//                     {
//                         start: 'today prev,next', // will normally be on the left. if RTL, will be on the right
//                         center: 'title',
//                         end: 'dayGridMonth,timeGridWeek,timeGridDay' // will normally be on the right. if RTL, will be on the left
//                     }
//                 }
//                 businessHours={
//                     {
//                         daysOfWeek: [1, 2, 3, 4],
//                         start: '10:00',
//                         end: '16:00',
//                     }
//                 }
//             />
//         </div>
//       )
//     }






