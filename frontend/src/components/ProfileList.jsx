import React, { useState, useEffect } from "react";
import axios from "axios";
import API_BASE_URL from "../utils/config";
import useAuth from "../hooks/useAuth";

const ProfileList = () => {
  const [user, token] = useAuth();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
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
    fetchPets();
  }, [token]);

  return (
    <div className="petlist">
      {pets &&
        pets.map((petprofile) => (
          <ul key={petprofile.id}>
            <div className="petlist">
              <br></br>
              ID: {petprofile.id}
              <br></br>
              Name: {petprofile.pet_name}
              <br></br>
              Species: {petprofile.species}
              <br></br>
              Breed: {petprofile.breed}
              <br></br>
              Date of Birth: {petprofile.date_of_birth}
              <br></br>
              <br></br>
            </div>
          </ul>
        ))}
      <br></br>
    </div>
  );
};

export default ProfileList;
