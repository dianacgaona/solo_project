import { connect } from 'react-redux';
import PinList from './PinList.js';
import { fetchOnePin } from '../actions/actionPins.js';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    pin: Object.values(state.pin),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOnePin: id => dispatch(fetchOnePin(id)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PinList)
);
