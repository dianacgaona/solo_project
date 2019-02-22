// import axios from 'axios';
// import Users from './users/Users';
// import AuthForm from './login/AuthForm';
// import Auth from './utility/Auth';
// import PrivateRoute from './utility/AuthRouting';
import React, { Component } from "react";
import { Route } from "react-router-dom";
import AuthenticationContainer from "./components/AuthenticationContainer.js";
import HomeContainer from "./components/HomeContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path={"/"} component={HomeContainer} />
        <Route exact path={"/login"} component={AuthenticationContainer} />
      </div>
    );
  }
}

export default App;
