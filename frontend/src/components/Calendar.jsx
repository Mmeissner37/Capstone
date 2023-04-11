import React from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';



const Calendar = () => {
    return ( 
        <div className="calendar">
            <FullCalendar plugins={[dayGridPlugin]}
            initialView="dayGridMonth" />
        </div>
     );
}
 
export default Calendar;

