import React, { Component } from "react";
import { PinList } from "./PinList";
import NaviBarContainer from "./NaviBarContainer";
import "../css/App.css";

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
        <PinList pins={this.props.pins} />
      </div>
    );
  }
}
