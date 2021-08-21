import React from "react";
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useContext } from "react";
import { UserContext } from "../../../App";

// const user = JSON.parse(localStorage.getItem('user-info'))

const Navbar = ({ countCartItems, name, handleLogOut}) => {
//   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//   let userName = loggedInUser.name;
  return (
    <nav
      style={{ backgroundColor: "rgb(78, 189, 70)" }}
      className="navbar navbar-expand-lg navbar-dark"
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold ms-3" to="#">
          Art Gallery
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul
            style={{ marginRight: "10px", marginLeft: "10px" }}
            className="navbar-nav ms-auto hover-nav fw-bolder"
          >
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active text-dark"
                exact
                to="/order"
              >
                Order
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active text-dark"
                exact
                to="dashboard"
              >
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark active" exact to="/shop">
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active text-dark" exact to="/blogs">
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active text-dark" exact to="contact">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;