import React, { Component } from 'react';
import '../css/login.css';

export default class Login extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchAllPins();
  }

  displayLoginPins = () => {
    return this.props.pins.map(pin => {
      return (
        <div key={pin.id} className="pin-div">
          <img src={pin.url} alt="pins" className="pins" />
        </div>
      );
    });
  };

  render() {
    console.log(this.props, 'my pins');
    return (
      <div>
        <div className="parent-div-pin">{this.displayLoginPins()}</div>
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
              <h3 className="login-signup">Log in to see more</h3>
            </div>
            <div className="text-container">
              <h3 className="form-text">
                Access Poshpin's best ideas with a free account
              </h3>
            </div>
            <form>
              <div className="input-container">
                <input
                  className="form-input"
                  type="text"
                  placeholder="Email or phone number"
                />
                <br />
              </div>
              <div className="input-container">
                <input
                  className="form-input"
                  type="text"
                  placeholder="Password"
                />
              </div>
              <br />
              <button type="submit">Log in</button>
              <br />
              <span>Not on Poshpin Yet? Sign Up</span>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
