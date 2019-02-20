import React from "react";
import "../App.css";

export const PinList = props => {
  console.log(props.pins, "this");
  // debugger;
  return props.pins.map((pin, i) => {
    return (
      <div key={pin.id} className="pin-div">
        <img src={pin.url} alt="" className="pins" />
      </div>
    );
  });
};
