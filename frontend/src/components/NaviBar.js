import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../css/navibar.css";
import logo from "../assets/poshpin-logo.png";
import search_logo from "../assets/800px-magnify-glass.svg.png";

class NaviBar extends Component {
  handleLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    if (!this.props.currentUser.name) return null;
    return (
      <nav className="navi-bar">
        <div className="posh-logo-div">
          <Link to="/home">
            <img src={logo} alt="logo" className="posh-logo " />
          </Link>
        </div>

        <div className="navi-search">
          <div className="search-logo-div">
            <img src={search_logo} alt="glass" className="search-logo" />
          </div>
          <input type="text" placeholder="Search" className="search-bar" />
        </div>

        <div className="links-div">
          <Link to="/home" className="navi-links">
            Home
          </Link>
          <Link to="/user" className="navi-links">
            user
          </Link>
          <button
            type="button"
            onClick={this.handleLogout}
            className="navi-button new-label"
          >
            Log out
          </button>
        </div>
      </nav>
    );
  }
}
//GOES INSIDE THE USER LINK => {this.props.currentUser.name}

export default withRouter(NaviBar);
