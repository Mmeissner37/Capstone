import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import ProfilePresenter from "../../components/ProfilePresenter/ProfilePresenter";
import axios from "axios";
import API_BASE_URL from "../../utils/config";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [user, token] = useAuth();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const getPets = async () => {
      try {
        let response = await axios.get(`${API_BASE_URL}/pets/`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setPets(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    getPets();
  }, [token]);

  return (
    <div className="profilepage">
      <div className="profile-header">
        <h2>{user.username}'s Pets</h2>
        <br></br>
      </div>
      <div className="container-lg">
        <ProfilePresenter />
      </div>
      <br></br>
      <div className="footer">
        <a href="/profiles">
          <img
            src="http://clipart-library.com/images/8cAEyLKni.png"
            height="50px"
            width="50px"
            alt="cat"
          />
        </a>
        <h5>Go Back to the Top</h5>
        <br></br>
      </div>
    </div>
  );
};

export default ProfilePage;
