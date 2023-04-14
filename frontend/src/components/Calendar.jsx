import React from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";


export default class DemoApp extends React.Component {
    render() {
      return (
        <FullCalendar
          plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin ]}
          initialView="dayGridMonth"
          weekends={false}
          dateClick={this.handleDateClick}
          eventContent={this.render.eventContent}
          headerToolbar={
            {
                start: 'today prev,next', // will normally be on the left. if RTL, will be on the right
                center: 'title',
                end: 'dayGridMonth,timeGridWeek,timeGridDay' // will normally be on the right. if RTL, will be on the left
              }
          }
          businessHours={
            {
                start: '10:00',
                end: '16:00',
            }
          }
        />
      )
    }

  }



