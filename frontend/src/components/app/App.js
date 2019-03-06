import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../utility/utilAuthRouting.js';
import HomeContainer from '../home/HomeContainer';
import NaviBarContainer from '../navibar/NaviBarContainer';
import AuthenticationContainer from '../auth/AuthenticationContainer.js';
import SinglePinContainer from '../singlepin/SinglePinContainer.js';

// import '../css/App.css';

class App extends Component {
  componentDidMount() {
    this.props.checkAuthStatus();
  }

  render() {
    return (
      <div className="App">
        <AuthRoute exact path={'/'} component={AuthenticationContainer} />
        <ProtectedRoute exact path={'/'} component={NaviBarContainer} />
        <ProtectedRoute exact path={'/home'} component={HomeContainer} />
        <Route exact path={'/pins/:id'} component={SinglePinContainer} />
      </div>
    );
  }
}

export default App;
