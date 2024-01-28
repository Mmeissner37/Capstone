import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import './RegisterPage.css'


const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    is_owner: false,
    is_vet: false,
    is_guest: false
  };
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerUser
  );

  return (
    <div className="reg-page">
      <div className="container">
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
            First Name:{" "}
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Last Name:{" "}
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Email:{" "}
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Password:{" "}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </label>
          <label> Check here if you are an owner:
          <input type="checkbox" name="is_owner" value={formData.is_owner} onChange={handleInputChange} />
          </label>
          {/* <label> Check here if you are a guest:
          <input type="checkbox" name="is_guest" value={formData.is_guest} onChange={handleInputChange} />
          </label> */}
          <p style={{ fontSize: "12px" }}>
            NOTE: Make this an uncommon password with characters, numbers, and
            special characters!
          </p>
          <button>Register!</button>
        </form><br></br>
        <br></br>
      </div>
    </div>
  );
};

export default RegisterPage;
