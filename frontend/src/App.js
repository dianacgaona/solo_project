import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import HomeContainer from "./components/HomeContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeContainer />
        <Login />
      </div>
    );
  }
}

export default App;
