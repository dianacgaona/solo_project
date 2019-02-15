import { PinList } from "./PinList";
import React, { Component } from "react";

export default class Home extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchAllPins();
  }

  render() {
    // debugger;
    return (
      <div>
        <PinList pins={this.props.pins} />
      </div>
    );
  }
}
