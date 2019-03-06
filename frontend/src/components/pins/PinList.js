import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import "../css/App.css";
import '../../css/session.css';

class PinList extends Component {
  displayAllPins = () => {
    return this.props.pins.map(pin => {
      return (
        <Link to={`/pins/${pin.id}`}>
          <div key={pin.id} className="pin-div">
            <img src={pin.url} alt="pins" className="pins" />
          </div>
        </Link>
      );
    });
  };

  render() {
    console.log(this.props, 'IN THE PIN LIST11111111');
    return <div className="parent-div-pin">{this.displayAllPins()}</div>;
  }
}

export default PinList;
