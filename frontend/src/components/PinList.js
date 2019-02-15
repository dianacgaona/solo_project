import React from "react";

export const PinList = props => {
  console.log(props.pins, "this");
  // debugger;
  let imagesReturn;
  return (imagesReturn = props.pins.map((pin, i) => {
    return (
      <div key={i} className="images">
        <img src={pin.url} alt="" />
      </div>
    );
  }));
  // return <div>{imagesReturn}</div>;
};
