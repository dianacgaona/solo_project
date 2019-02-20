import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import LoginContainer from "./components/LoginContainer.js";
import HomeContainer from "./components/HomeContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path={"/"} component={HomeContainer} />
        <Route exact path={"/login"} component={LoginContainer} />
      </div>
    );
  }
}

export default App;
