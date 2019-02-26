import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../css/navibar.css";

class NaviBar extends Component {
  handleLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    return (
      <nav className="navi-bar">
        <Link to="/home" className="navi-links">
          <img
            src="https://www.freeiconspng.com/uploads/white-pinterest-logo-on-black-16.png"
            alt="logo"
            className="posh-logo"
          />
        </Link>
        <div>
          <input type="text" placeholder="Search" className="search-bar" />
        </div>
        <Link to="/home" className="navi-links">
          Home
        </Link>
        <Link to="/user" className="navi-links">
          User
        </Link>
        <Link to="/settings" name="•••" className="navi-links">
          •••
        </Link>
        <button onClick={this.handleLogout}>Log out</button>
      </nav>
    );
  }
}

export default withRouter(NaviBar);
