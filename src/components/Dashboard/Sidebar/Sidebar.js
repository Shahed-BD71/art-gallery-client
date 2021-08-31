import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCog,
  faFilter,
  faGripHorizontal,
  faSignOutAlt,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [isArtist, setIsArtist] = useState(false);
  console.log(isArtist)
  useEffect(() => {
    fetch(`https://warm-peak-57266.herokuapp.com/isArtist`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: user.email }),
      
    })
      .then((res) => res.json())
      .then((data) => setIsArtist(data));
  }, []);

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/dashboard" className="text-white">
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
          </Link>
        </li>
        {isArtist && (
          <div>
            <li>
              <Link to="/" className="text-white">
                <FontAwesomeIcon icon={faUser} /> <span>Clients</span>
              </Link>
            </li>
            <li>
              <Link to="/allorder" className="text-white">
                <FontAwesomeIcon icon={faFilter} /> <span>Orders</span>
              </Link>
            </li>
            <li>
              <Link to="/addArtist" className="text-white">
                <FontAwesomeIcon icon={faUserPlus} /> <span>Add An Artist</span>
              </Link>
            </li>
            <li>
              <Link to="/addProduct" className="text-white">
                <FontAwesomeIcon icon={faUserPlus} /> <span>Add An Product</span>
              </Link>
            </li>
            <li>
              <Link to="/doctor/setting" className="text-white">
                <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
              </Link>
            </li>
          </div>
        )}
      </ul>
      <div className='mb-4'>
        <Link to="/" className="text-white">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
