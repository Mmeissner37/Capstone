import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import './GuestLoginPage.css'

const LoginPage = () => {
    const { loginUser, isServerError } = useContext(AuthContext);
    const defaultValues = { password: "" };
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
    <div className="guestlogin">
      <div className="container">
                <h3>Hello fellow veterinary professional!</h3><br></br>
                <h3>Please enter the provided login information to access pet profiles.</h3><br></br>
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
            What's the secret word?{" "}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </label>
          {isServerError ? (
            <p className="error">Login failed, incorrect credentials!</p>
          ) : null}
          <button>Enter!</button>
        </form><br></br>
        <br></br>
      </div>
    </div>
  );
};

export default LoginPage;
