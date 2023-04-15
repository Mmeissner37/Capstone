import React from "react";
import useAuth from "../../hooks/useAuth";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import { Link } from "react-router-dom";
import { MyCalendar } from "../../components/Calendar";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();


  return (
    <div>
      <div className="container-md">
        <div className="container-home">
          <h1>Home Page for {user.username}!</h1><br></br>
          <div>
            <a href="/profiles">
              <h4>See Profiles</h4>
              <img src="http://clipart-library.com/images/8cAEyLKni.png" height='100px' width='100px' alt="cat" />
            </a>
          </div>
        </div>
      </div>
      <div className="container-md">
        <ProfileForm /><br></br>
        {/* <div className="profile-link">
          <Link to="/profiles">See Pets</Link>
        </div><br></br> */}
      </div>
      <MyCalendar />
    </div>

  );
};

export default HomePage;
