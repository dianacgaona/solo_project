import React, { Component } from 'react';

class SinglePin extends Component {
  // componentDidMount() {
  //   let id = this.props.match.params.id;
  //   this.props.fetchOnePin(id);
  // }

  displaySinglePin = () => {
    // debugger;
    // return this.props.pin.map(mypin => {
    let { url } = this.props.pin;
    return (
      <div>
        <img src={url} alt="" />
      </div>
    );
    // });
  };

  render() {
    if (!this.props.pin) return null;
    // console.log(this.props, "in the single pin !!!!!!");
    return <div className="maindiv-singlepin">{this.displaySinglePin()}</div>;
  }
}

export default SinglePin;
