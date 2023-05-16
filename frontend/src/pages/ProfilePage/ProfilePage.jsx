import React from "react";
import ProfilePresenter from "../../components/ProfilePresenter/ProfilePresenter";
import './ProfilePage.css'

const ProfilePage = () => {

    return ( 
      <div className="wholepage">
          <div className="petcontainer">
            <div className="vetsorter">
              <ProfilePresenter />
            </div>
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

