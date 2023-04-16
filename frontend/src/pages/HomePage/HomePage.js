import React from "react";
import useAuth from "../../hooks/useAuth";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import { Link } from "react-router-dom";
import { MyCalendar } from "../../components/Calendar";
import PrescriptionForm from '../../components/PrescriptionForm';


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
            <img src="http://clipart-library.com/images/8cAEyLKni.png" height='100px' width='100px' alt="cat" />
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
      {/* <div className="container-md">

      </div> */}
      <MyCalendar />
    </div>

  );
};

export default HomePage;
