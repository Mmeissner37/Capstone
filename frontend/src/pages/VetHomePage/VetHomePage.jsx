import React, { useState, useEffect } from 'react';
import VetProfilePresenter from "../../components/VetProfilePresenter";
import axios from "axios";
import useAuth from "../../hooks/useAuth";


import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";


const VetHomePage = () => {
  const [user, token] = useAuth();
  const [appts, setAppts] = useState([]);

  //Error ==== useEffect not defined??

 useEffect (() => {
  const seeAppts = async() => {
    try {
      let response = await axios.get('http://127.0.0.1:8000/appts/all/', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      setAppts(response.data);
    } catch(error) {
      console.log(error.response.data)
    }
  };
  seeAppts();
 }, [token])



  return (
    <div className="vet-homepage">
      <div className="container-md">
        <div className="container-header">
          <h1>Home Page for {user.username}!</h1><br></br>
        </div>
        <div>
            <VetProfilePresenter />
        </div>
      </div>
      <div className="calender-header">
        <h1>Welcome Local Paws Animal Clinic!</h1>
        <h4>See all your scheduled appointments below</h4><br></br>
        <div>
          {appts && 
          appts.map((appointments) =>
            <ol key={appointments.id}>
              <div>
                Owner: {appointments.user.username}<br></br>
                Title: {appointments.title}<br></br>
                Appoinment Date: {appointments.appt_date}<br></br>
                Start Time: {appointments.start}<br></br>
                End Time: {appointments.end}<br></br>
              </div><br></br>
            </ol>)}
        </div>
        <br></br>
      </div>
    </div>

  );
};

export default VetHomePage;
