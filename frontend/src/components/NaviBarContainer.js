import { connect } from 'react-redux';
import NaviBar from './NaviBar.js';
import { logoutUser } from '../actions/actionSession.js';

const mapStateToProps = state => {
  return {
    email: state.email,
  };
};

const mapDispatchToProps = dispatch => {
  // debugger;
  return {
    logoutUser: () => dispatch(logoutUser()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NaviBar);
