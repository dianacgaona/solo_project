import { connect } from 'react-redux';
import Login from './Login';
import { fetchAllPins } from '../actions/actionPins';

const mapStateToProps = state => {
  return {
    pins: state.pins,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPins: () => dispatch(fetchAllPins()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
