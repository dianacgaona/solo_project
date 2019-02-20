import { PinList } from './PinList';
import React, { Component } from 'react';
import '../App.css';
import NaviBar from './NaviBar';

export default class Home extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchAllPins();
  }

  render() {
    // debugger;
    return (
      <div>
        <NaviBar />
        <PinList pins={this.props.pins} />
      </div>
    );
  }
}
