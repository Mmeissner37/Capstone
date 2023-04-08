import React from "react";
import useAuth from "../../hooks/useAuth";
import ProfilePresenter from "../../components/ProfilePresenter/ProfilePresenter";
import ProfileForm from "../../components/ProfileForm/ProfileForm";


const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();


  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <ProfileForm />
    </div>
  );
};

export default HomePage;
