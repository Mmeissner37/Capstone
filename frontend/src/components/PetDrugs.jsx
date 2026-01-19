import React, { useState, useEffect } from "react";
import axios from "axios";
import API_BASE_URL from "../utils/config";
import useAuth from "../hooks/useAuth";

const PetDrugs = (props) => {
  const [user, token] = useAuth();
  const [petDrugs, setPetDrugs] = useState([]);
  const [filteredDrugs, setFilteredDrugs] = useState([]);

  useEffect(() => {
    const fetchDrugs = async () => {
      try {
        let response = await axios.get(`${API_BASE_URL}/both/all/`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setPetDrugs(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchDrugs();
  }, [token]);

  useEffect(() => filterDrugs(), [petDrugs]);

  function filterDrugs() {
    let filteredDrugs = petDrugs.filter((el) => {
      if (el.pet.id === props.petID) {
        return true;
      }
    });
    setFilteredDrugs(filteredDrugs);
  }

  // add filter function here to filter based on prop passed in (pet id) reference music library filter
  //filter.includes(pet_prescription.pet_id).map(pet_prescription)

  return (
    <div>
      <div>
        {filteredDrugs[0]
          ? filteredDrugs.map((el) => {
              return (
                <ol className="profiledrugs" key={el.prescription.id}>
                  <ul className="list">
                    Drug Name: {el.prescription.drug_name}
                  </ul>
                  <ul className="list">
                    Drug Dose: {el.prescription.drug_dose}
                  </ul>
                  <ul className="list">
                    Drug Instructions: {el.prescription.drug_instr}
                  </ul>
                  <br></br>
                </ol>
              );
            })
          : "No current medications"}
      </div>
    </div>
  );
};

export default PetDrugs;
