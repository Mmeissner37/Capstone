import React, { useState, useEffect } from "react";
import VetProfilePresenter from "../../components/VetProfilePresenter";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import './VetHomePage.css'

import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";

const VetHomePage = () => {
  const [user, token] = useAuth();
  const [appts, setAppts] = useState([]);

  useEffect(() => {
    const seeAppts = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/appts/all/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        let customResponse = response.data.map((el, id) => {
          return {
            id: id,
            start: el.appt_date + "T" + el.start,
            end: el.appt_date + "T" + el.end,
            title: el.title,
          };
        });
        setAppts(customResponse);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    seeAppts();
  }, [token]);

  return (
    appts && (
      <div className="vet-homepage">
        <div className="container-md">
          <div className="container-header">
            <h1>Home Page for {user.username}!</h1>
            <br></br>
          </div>
        </div>
        <div className="calender-header">
          <h1>Welcome Local Paws Animal Clinic!</h1>
          <h4>See all your scheduled appointments below:</h4>
          <br></br>
          <FullCalendar
            events={appts}
            plugins={[listPlugin]}
            initialView="listWeek"
            views={{
              listDay: { buttonText: "list day" },
              listWeek: { buttonText: "list week" },
              listMonth: { buttonText: "list month" },
            }}
            headerToolbar={{
              left: "title",
              center: "listDay,listWeek,listMonth",
              right: "today prev,next",
            }}
          />
        </div>
        <div>
          <VetProfilePresenter />
        </div>
        <div className="container">
            <div className="ref">
                <h3>Referring a patient to a specialist?</h3>
                <h3>Fellow veterinary professional requiring access to profiles?</h3><br></br>
                <h3>Provide them with guest access using the credentials below:</h3><br></br>
                <h4>Username: GuestVet</h4>
                <h4>Password: LocalPawsGuest1</h4>
            </div>
        </div>
      </div>
    )
  );
};

export default VetHomePage;

//Maping through appointments to display in list form--NOT using fullcalendar
/* <div>
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
        </div> */
