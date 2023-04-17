import React from "react";
import ProfilePresenter from "../../components/ProfilePresenter/ProfilePresenter";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const ProfilePage = () => {

    return ( 
        <div className="container">
            <ProfilePresenter />
            <br></br>
            <a href="/">
              <img src="http://clipart-library.com/images/8cAEyLKni.png" height='50px' width='50px' alt="cat" />
            </a>
            <h5>Go Back Home</h5>
            <br></br>
        </div>
     );
}
 
export default ProfilePage;

