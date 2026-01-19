import React, { useState, useEffect } from "react";
import axios from "axios";
import API_BASE_URL from "../../utils/config";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import { Navigate } from "react-router-dom";

let initialValues = {
  pet_name: "",
  species: "",
  breed: "",
  date_of_birth: "",
};

const UpdatePet = (props) => {
  const [user, token] = useAuth();
  const [updatedPet, setUpdatedPet] = useState([]);
  const [pets, setPets] = useState([]);
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    initialValues,
    updatePet,
  );

  useEffect(() => {
    const updatePet = async () => {
      try {
        let response = await axios.put(
          `${API_BASE_URL}/pets/alterpet/${1}/`,
          formData,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          },
        );
        Navigate("/profiles");
      } catch (error) {
        console.log(error.response.data);
      }
    };
    updatePet();
  }, [token]);

  useEffect(() => updatePet(), [pets]);

  function updatePet() {
    let updatedPet = pets.filter((el) => {
      if (el.pet.id === props.petID) {
        return true;
      }
    });
    setUpdatedPet(updatedPet);
  }

  //PAGE IS INCOMPLETE--TBD LATER AT FUTURE UPDATE

  return (
    <div>
      <h3>Update Your Pet!</h3>
      {/* {pets && 
            pets.map((petprofile) => */}
      <form>
        <form className="update-pet" onSubmit={handleSubmit}>
          <label>
            Pet Name: {"pet_name"}
            <input
              type="text"
              name="pet_name"
              value={formData.pet_name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Species: {"species"}
            <input
              type="text"
              name="species"
              value={formData.species}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Breed: {"breed"}
            <input
              type="text"
              name="breed"
              value={formData.breed}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Date of Birth: {"date_of_birth"}
            <input
              type="date"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleInputChange}
            />
          </label>
        </form>
      </form>
      {/* )} */}

      {/* 
            <div className='profiles'>
                {pets &&
                pets.map((petprofile) =>
                    <ol key={petprofile.id}>
                        <div className='present-profile'>
                            ID: {petprofile.id}<br></br>
                            Name: {petprofile.pet_name}<br></br>
                            Species: {petprofile.species}<br></br>
                            Breed: {petprofile.breed}<br></br>
                            Date of Birth: {petprofile.date_of_birth}<br></br>
                            <br></br>
                        </div>
                    </ol>)}<br></br>
            </div> */}
    </div>
  );
};

export default UpdatePet;
