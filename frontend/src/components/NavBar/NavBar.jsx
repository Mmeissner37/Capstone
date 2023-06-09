import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          {/* <Link to="/" style={{ textDecoration: "none", color: "white" }}> */}
            <b>Pawrent Helper</b>
          {/* </Link> */}
        </li>
        <li>
            <button onClick={()=> navigate('/')}>Home</button>
            <button onClick={()=> navigate('/profiles')}>Profiles</button>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/welcome")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
