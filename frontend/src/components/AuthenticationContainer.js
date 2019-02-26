import { connect } from "react-redux";
import UserAuthentication from "./UserAuthentication";
import { fetchAllPins } from "../actions/actionPins";
import { toggleForms } from "../actions/actionAuthentication";
import { newUser, loginUser } from "../actions/actionSession";

const mapStateToProps = state => {
  console.log(state);
  return {
    toggle: state.toggle,
    pins: state.pins,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  console.log(dispatch(fetchAllPins()));
  return {
    toggleButton: () => dispatch(toggleForms()),
    fetchAllPins: () => dispatch(fetchAllPins()),
    newUser: user => dispatch(newUser(user)),
    loginUser: user => dispatch(loginUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAuthentication);
