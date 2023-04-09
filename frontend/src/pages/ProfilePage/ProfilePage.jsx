import React from "react";
import ProfilePresenter from "../../components/ProfilePresenter/ProfilePresenter";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const ProfilePage = () => {

    return ( 
        <div className="container">
            <ProfilePresenter />
            <Link to="/">Go Back Home</Link>
        </div>
     );
}
 
export default ProfilePage;

