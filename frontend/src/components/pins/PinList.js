import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/session.css';
import '../../css/pins.css';

class PinList extends Component {
  displayAllPins = () => {
    return this.props.pins.map(pin => {
      return (
        <Link key={pin.id} to={`/pins/${pin.id}`}>
          <div className="pin-div">
            <img src={pin.url} alt="pins" className="pins" />
          </div>
        </Link>
      );
    });
  };

  render() {
    return <div className="parent-div-pin">{this.displayAllPins()}</div>;
  }
}

export default PinList;
