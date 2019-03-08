import React, { Component } from 'react';
import add_icon from '../../assets/add-icon.png';
import '../../css/profile.css';
import { Link } from 'react-router-dom';

export default class UserProfile extends Component {
  state = {};
  // <Link to="/pins/pin-builder">Create a pin</Link>
  // <Link to="/pins/pin-builder">Create a board</Link>

  render() {
    console.log('HERE:', this.props);
    if (!this.props.currentUser) return null;
    return (
      <div className="profile-background">
        <div className="add-edit-div">
          <div className="add-edit-inner-div">
            <img src={add_icon} alt="" className="add-icon" />
          </div>
        </div>

        <div className="name-pic-div">
          <div className="profile-name">{this.props.currentUser.username}</div>
          <div className="pic-div">
            <img
              src={this.props.currentUser.profile_pic}
              alt=""
              className="profile-pic"
            />
          </div>
        </div>

        <div className="selector-div">
          <div className="selector-inner-div">
            <Link
              className="selector-link"
              to={`/user/${this.props.currentUser.id}/boards`}
            >
              Boards
            </Link>
            <Link
              className="selector-link"
              to={`/user/${this.props.currentUser.id}/pins`}
            >
              Pins
            </Link>
          </div>
        </div>

        <div className="display-div" />
      </div>
    );
  }
}
