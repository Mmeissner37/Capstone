import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";
import "./VetLoginPage.css";


const VetLoginPage = () => {
  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { username: "", password: "" };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    loginUser
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  return (
    <div className="vetlogin">
      <div className="container">
        <h2>Welcome Local Paws Animal Clinic!</h2><br></br>
        <h3>Login in below to view your appointments</h3><br></br>
        <br></br>
        <br></br>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Username:{" "}
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Password:{" "}
            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </label>
          {isServerError ? (
            <p className="error">Login failed, incorrect credentials!</p>
          ) : null}
          <Link to="/vetregister">Click to register!</Link>
          <button>Login!</button>
        </form><br></br>
        <br></br>
      </div>
    </div>
  );
};

export default VetLoginPage;
