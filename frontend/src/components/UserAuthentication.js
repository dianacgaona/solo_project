import React, { Component } from "react";
import LogIn from "./Login";
import SignUp from "./SignUp";
import "../css/login.css";
import "../css/form.css";

// import { PinList } from './PinList';

class UserAuthentication extends Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {
    this.props.fetchAllPins();
  }

  displayPins = () => {
    return this.props.pins.map(pin => {
      return (
        <div key={pin.id} className="pin-div">
          <img src={pin.url} alt="pins" className="pins" />
        </div>
      );
    });
  };

  render() {
    console.log(this.props, "redux");
    return (
      <div className="main-login">
        <div className="parent-div-pin">{this.displayPins()}</div>
        {!this.props.toggle ? (
          <div>
            <button className="toggle-button" onClick={this.props.toggleButton}>
              Sign up
            </button>
            <SignUp />
          </div>
        ) : (
          <div>
            <button className="toggle-button" onClick={this.props.toggleButton}>
              Log in
            </button>
            <LogIn />
          </div>
        )}
      </div>
    );
  }
}

export default UserAuthentication;
