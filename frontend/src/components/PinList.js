import React from "react";
import "../css/App.css";

export const PinList = ({ pins }) =>
  pins.map(pin => (
    <div key={pin.id} className="pin-div">
      <img src={pin.url} alt="" className="pins" />
    </div>
  ));

//for implicit return, you can't put a debugger (can't put a debugger in a return statement)
