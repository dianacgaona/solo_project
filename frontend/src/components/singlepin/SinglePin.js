import React, { Component } from "react";
import "../../css/singlepin.css";
import back_arrow from "../../assets/back-arrow.png";

class SinglePin extends Component {
  // componentDidMount() {
  //   let id = this.props.match.params.id;
  //   this.props.fetchOnePin(id);
  // }

  displaySinglePin = () => {
    // debugger;
    let { url } = this.props.pin;
    return <img className="single-pin" src={url} alt="" />;
  };

  render() {
    console.log("LOOKING FOR PINS:", this.props);
    if (!this.props.pin) return null;
    return (
      <div className="singlepin-background">
        <div className="arrow-div">
          <button
            className="arrow-button"
            onClick={() => this.props.history.goBack()}
          >
            <img src={back_arrow} alt="arrow" className="arrow-back" />
          </button>
        </div>
        <div className="pin-container">
          <div className="save-div">
            <button className="save-button">Save</button>
          </div>
          <div className="pin-info-display-div">
            <div className="pin-holder">{this.displaySinglePin()}</div>
            <div className="info-div">
              <div className="url-span">
                <span> {this.props.pin.url}</span>
              </div>
              <br />
              <hr className="hr-line" />
              <div className="title-div">
                <span>{this.props.pin.title}</span>
              </div>
              <br />
              <div className="description-div">
                <span>{this.props.pin.description}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SinglePin;
