import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
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
    <div className="login">
      <div className="container">
        <h2>Welcome to Pawrent Helper!</h2><br></br>
        <h3>We're here to help you organize your furry crew and their medical needs so you can spend more time relaxing.</h3><br></br>
        <h3>Create Pet Profiles, keep track of current prescriptions, and even schedule appointments with Local Paws Animal Clinic.</h3><br></br>
        <h3>We're here to help you so you can help them.</h3>
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
          <Link to="/register">Click to register!</Link>
          <button>Login!</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
