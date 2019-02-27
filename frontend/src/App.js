import React, { Component } from 'react';
import HomeContainer from './components/HomeContainer';
import AuthenticationContainer from './components/AuthenticationContainer.js';
import { AuthRoute, ProtectedRoute } from './utility/utilAuthRouting.js';
import { Switch } from 'react-router-dom';
// import Auth from "./utility/utilAuth";

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <AuthRoute exact path={'/'} component={AuthenticationContainer} />
          <ProtectedRoute exact path={'/home'} component={HomeContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
