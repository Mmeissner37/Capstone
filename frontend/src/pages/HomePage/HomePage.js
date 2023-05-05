import React from "react";
import useAuth from "../../hooks/useAuth";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import { MyCalendar } from "../../components/Calendar";
import PrescriptionForm from '../../components/PrescriptionForm';
import CalendarForm from "../../components/CalendarForm";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();


  return (
    <div>
      <div className="container-md">
        <div className="container-header">
          <h1>Home Page for {user.username}!</h1><br></br>
          <h4>See Profiles</h4>
          <a href="/profiles">
            <img src="https://media.istockphoto.com/id/1269517302/vector/vector-image-of-pet-logo-on-white.jpg?s=612x612&w=0&k=20&c=0DEPLd3Lq5VINJRLNbQoXUOqzlXTIpHMZ76t5E0gzD4=" height='75px' width='75px' alt="paw print" />
          </a>
        </div>
        <div className="homepage">
          <div className="profileform">
            <ProfileForm />
          </div>
          <div className="drugform">
            <PrescriptionForm />
          </div>
        </div>
      </div>
      <div className="calender-header">
        <h1>Welcome to the Calendar Function!</h1>
        <h2>Here you can schedule an appointment with Local Paws Animal Clinic</h2>
        <h4>Buisness Hours: Monday, Tuesday, Wednesday and Friday</h4>
        <h4>9:00 AM - 5:00 PM</h4>
        <h4>Appointments are available every 30 minutes</h4>
      </div>
      <CalendarForm />
      <MyCalendar />
    </div>

  );
};

export default HomePage;
