import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { fetchOnePin } from '../../actions/actionPins';
import SinglePin from './SinglePin';

const mapStateToProps = (state, ownProps) => {
  return {
    pin: state.pins[ownProps.match.params.id],
  };
};
//
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchOnePin: id => dispatch(fetchOnePin(id))
//   };
// };

export default withRouter(
  connect(
    mapStateToProps
    // mapDispatchToProps
  )(SinglePin)
);
