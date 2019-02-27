import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../css/navibar.css";
import "../assets/poshpin-logo.png";

class NaviBar extends Component {
  handleLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  // <img
  //   src="https://www.freeiconspng.com/uploads/white-pinterest-logo-on-black-16.png"
  //   alt="logo"
  //   className="posh-logo"
  // />

  render() {
    // debugger;
    return (
      <nav className="navi-bar">
        <Link to="/home" className="navi-links">
          <img
            src="../assets/poshpin-logo.png"
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
          {this.props.currentUser.name}
        </Link>

        <button onClick={this.handleLogout}>Log out</button>
      </nav>
    );
  }
}

export default withRouter(NaviBar);
