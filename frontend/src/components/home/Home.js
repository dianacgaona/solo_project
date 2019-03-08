import React, { Component } from 'react';
import PinListContainer from '../pins/PinListContainer';
import '../../css/pins.css';
import '../../css/home.css';

export default class Home extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchAllPins();
  }

  render() {
    // debugger;
    return (
      <div className="home-div">
        <PinListContainer />
      </div>
    );
  }
}
