import React from "react";
import useAuth from "../../hooks/useAuth";
import VetProfilePresenter from "../../components/VetProfilePresenter";


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
        </div>
        <div>
            <VetProfilePresenter />
        </div>
      </div>
      <div className="calender-header">
        <h1>Welcome Local Paws Animal Clinic!</h1>
        <h4>See all your scheduled appointments below</h4>
        <br></br>
      </div>
    </div>

  );
};

export default HomePage;
