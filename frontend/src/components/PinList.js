import React from 'react';
// import "../css/App.css";

export const PinList = ({ pins }) =>
  pins.map(pin => (
    <div key={pin.id} className="pin-div">
      <img src={pin.url} alt="" className="pins" />
    </div>
  ));

//for implicit return, you can't put a debugger for an implicit return

// .parentImageDiv {
//   line-height: 0;
//    -webkit-column-count: 5;
//    -webkit-column-gap: 0px;
//    -moz-column-count: 5;
//    -moz-column-gap: 0px;
//     column-count: 5;
//     column-gap: 0px;
// }
// .parentImageDiv img {
//    margin-top:15px;
//   width: 100% !important;
//   height: auto !important;
// }
// .parentImageDiv{
//   display:inline-block;
//   margin-right: auto;
//   margin-left: auto;
// }
