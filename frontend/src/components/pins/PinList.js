import React, { Component } from 'react';
// import "../css/App.css";
import '../../css/session.css';

class PinList extends Component {
  displayAllPins = () => {
    return this.props.pins.map(pin => {
      return (
        <div key={pin.id} className="pin-div">
          <img src={pin.url} alt="pins" className="pins" />
        </div>
      );
    });
  };

  render() {
    console.log(this.props, 'in the pin list');
    return <div className="parent-div-pin">{this.displayAllPins()}</div>;
  }
}

export default PinList;
