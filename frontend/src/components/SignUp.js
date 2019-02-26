import React, { Component } from "react";
import "../css/login.css";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password_digest: "",
      name: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.newUser(this.state).then(() => {
      this.props.loginUser({
        email: this.state.email,
        password_digest: this.state.password_digest
      });
    });
  };

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
            <form onSubmit={this.handleSubmit}>
              <div className="input-container">
                <input
                  onChange={this.handleChange}
                  name="email"
                  value={this.state.email}
                  className="form-input"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <br />
              <div className="input-container">
                <input
                  onChange={this.handleChange}
                  name="password_digest"
                  value={this.state.password_digest}
                  className="form-input"
                  type="password"
                  placeholder="Create a password"
                />
              </div>
              <br />
              <div className="input-container">
                <input
                  onChange={this.handleChange}
                  name="name"
                  value={this.state.name}
                  className="form-input"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <br />
              <button type="submit">Sign Up</button>
              <br />
              <span>Already a member? Log in</span>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
