import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../../utils/config";
import PrescriptionPresenter from "../../components/PrescriptionPresenter";
import "./UpdateDrugPage.css";

const UpdateDrugPage = () => {
  const [user, token] = useAuth();
  const navigate = useNavigate();
  const [prescription_id, setDrugID] = useState("");
  const [drug_name, setDrugName] = useState("");
  const [drug_dose, setDrugDose] = useState("");
  const [drug_instr, setDrugInstr] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let updateDrug = {
      drug_name: drug_name,
      drug_dose: drug_dose,
      drug_instr: drug_instr,
    };
    modifyDrug(updateDrug);
  }

  async function modifyDrug(updateDrug) {
    try {
      let response = await axios.put(
        `${API_BASE_URL}/drugs/${prescription_id}/`,
        updateDrug,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        },
      );
      navigate("/profiles");
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <div className="wholepage">
      <div className="update-drug-page">
        <div className="container">
          <h2>Select Prescription to Update</h2>
          <br></br>
          <br></br>
          <form className="form" onSubmit={handleSubmit}>
            <label>
              Prescription ID:{" "}
              <input
                type="text"
                name="prescription_id"
                value={prescription_id}
                onChange={(e) => setDrugID(e.target.value)}
              />
            </label>
            <label>
              Prescription Name:{" "}
              <input
                type="text"
                name="drug_name"
                value={drug_name}
                onChange={(e) => setDrugName(e.target.value)}
              />
            </label>
            <label>
              Prescription Dose:{" "}
              <input
                type="text"
                name="drug_dose"
                value={drug_dose}
                onChange={(e) => setDrugDose(e.target.value)}
              />
            </label>
            <label>
              Prescription Instructions:{" "}
              <input
                type="text"
                name="drug_instr"
                value={drug_instr}
                onChange={(e) => setDrugInstr(e.target.value)}
              />
            </label>
            <button>Update</button>
            <br></br>
          </form>
        </div>
        <div>
          <PrescriptionPresenter />
        </div>
        <br></br>
        <div className="footer">
          <a href="/profiles">
            <img
              src="http://clipart-library.com/images/8cAEyLKni.png"
              height="50px"
              width="50px"
              alt="paw print"
            />
          </a>
          <h5>Go Back To Profiles</h5>
        </div>
      </div>
    </div>
  );
};

export default UpdateDrugPage;
