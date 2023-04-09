import React from "react";
import ProfilePresenter from "../../components/ProfilePresenter/ProfilePresenter";
import useAuth from "../../hooks/useAuth";


const ProfilePage = () => {

    return ( 
        <div className="container">
            <ProfilePresenter />
        </div>
     );
}
 
export default ProfilePage;