import React, { Component } from 'react';
import PinListContainer from '../pins/PinListContainer';
import NaviBarContainer from '../navibar/NaviBarContainer';
import '../../css/App.css';

export default class Home extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchAllPins();
  }

  render() {
    // debugger;
    return (
      <div>
        <NaviBarContainer />
        <PinListContainer />
      </div>
    );
  }
}
