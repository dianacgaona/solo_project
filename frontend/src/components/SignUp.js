import React, { Component } from 'react';
import '../css/login.css';

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <div className="parent-div-pin" />
        <div className="transparent-div">
          <div className="form-div">
            <div className="logo-div">
              <img
                src="https://www.freeiconspng.com/uploads/white-pinterest-logo-on-black-16.png"
                alt="logo"
                className="login-logo"
              />
            </div>
            <div className="login-container">
              <h3 className="login-signup">Sign up to see more</h3>
            </div>
            <div className="text-container">
              <h3 className="form-text">
                Access Poshpin's best ideas with a free account
              </h3>
            </div>
            <form>
              <div className="input-container">
                <input className="form-input" type="text" placeholder="Email" />
              </div>
              <br />
              <div className="input-container">
                <input
                  className="form-input"
                  type="text"
                  placeholder="Create a password"
                />
              </div>
              <br />
              <div className="input-container">
                <input className="form-input" type="text" placeholder="Name" />
              </div>
              <br />
              <button type="submit">Log in</button>
              <br />
              <span>Already a member? Log in</span>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
