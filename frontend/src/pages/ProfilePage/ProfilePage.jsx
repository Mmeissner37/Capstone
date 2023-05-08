import React from "react";
import ProfilePresenter from "../../components/ProfilePresenter/ProfilePresenter";

const ProfilePage = () => {

    return ( 
      <div className="wholepage">
          <div className="container">
              <ProfilePresenter />
              <br></br>
              <a href="/">
                <img src="http://clipart-library.com/images/8cAEyLKni.png" height='50px' width='50px' alt="cat" />
              </a>
              <h5>Go Back Home</h5>
              <br></br>
          </div>
      </div>
    );
}
 
export default ProfilePage;

