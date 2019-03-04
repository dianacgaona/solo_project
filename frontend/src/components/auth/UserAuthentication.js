import React, { Component } from 'react';
import LogIn from './Login';
import SignUp from './SignUp';
import '../../css/session.css';
import '../../css/form.css';

class UserAuthentication extends Component {
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
    console.log(this.props, 'redux');
    return (
      <div className="main-login">
        <div className="parent-div-pin">{this.displayPins()}</div>
        {!this.props.toggle ? (
          <div>
            <button className="toggle-button" onClick={this.props.toggleButton}>
              Log in
            </button>
            <SignUp
              newUser={this.props.newUser}
              loginUser={this.props.loginUser}
            />
          </div>
        ) : (
          <div>
            <button className="toggle-button" onClick={this.props.toggleButton}>
              Sign up
            </button>
            <LogIn loginUser={this.props.loginUser} />
          </div>
        )}
      </div>
    );
  }
}

export default UserAuthentication;
