import React, { Component } from "react";
import HomeContainer from "./components/HomeContainer";
import AuthenticationContainer from "./components/AuthenticationContainer.js";
import { AuthRoute, ProtectedRoute } from "./utility/utilAuthRouting.js";
// import { Route } from 'react-router-dom';
// import Auth from "./utility/utilAuth";

import "./css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AuthRoute exact path={"/"} component={AuthenticationContainer} />
        <ProtectedRoute exact path={"/home"} component={HomeContainer} />
      </div>
    );
  }
}

export default App;
