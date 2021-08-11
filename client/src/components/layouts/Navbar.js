import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom'

const Navbar = ({ title, icon }) => {
  return (
    <div>
      <div className="navbar  bg-primary">
        <h1>
          <i className={icon}>{title}</i>
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/alert">Alert</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

Navbar.PropType = {
  title: PropType.string.isRequired,
  icon: PropType.string,
};

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fas fa-id-card-alt',
};
export default Navbar;
