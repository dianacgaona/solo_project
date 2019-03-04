import React, { Component } from 'react';
import HomeContainer from '../home/HomeContainer';
import AuthenticationContainer from '../auth/AuthenticationContainer.js';
import { AuthRoute, ProtectedRoute } from '../../utility/utilAuthRouting.js';
import { Switch } from 'react-router-dom';
// import Auth from "./utility/utilAuth";

// import '../css/App.css';

class App extends Component {
  componentDidMount() {
    this.props.checkAuthStatus();
  }

  render() {
    console.log(this.props, 'the app');
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
