import { connect } from "react-redux";
import UserAuthentication from "./UserAuthentication";
import { fetchAllPins } from "../actions/actionPins";
import { toggleForms } from "../actions/actionAuthentication";

const mapStateToProps = state => {
  console.log(state);
  return {
    toggle: state.toggle,
    pins: state.pins
  };
};

const mapDispatchToProps = dispatch => {
  console.log(dispatch(fetchAllPins()));
  return {
    toggleButton: () => dispatch(toggleForms()),
    fetchAllPins: () => dispatch(fetchAllPins())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAuthentication);
