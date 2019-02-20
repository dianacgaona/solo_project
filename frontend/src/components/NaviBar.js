import React from 'react';
import { Link } from 'react-router-dom';
import '../css/login.css';

const NaviBar = () => {
  return (
    <nav className="navi-bar">
      <img
        src="https://www.freeiconspng.com/uploads/white-pinterest-logo-on-black-16.png"
        alt="logo"
        className="posh-logo"
      />
      <div>
        <input type="text" placeholder="Search" className="search-bar" />
      </div>
      <Link to="/" className="navi-links">
        Home
      </Link>
      <Link to="/user" className="navi-links">
        User Profile
      </Link>
      <Link to="/settings" className="navi-links">
        •••
      </Link>
    </nav>
  );
};

export default NaviBar;

//edit link for settings!
