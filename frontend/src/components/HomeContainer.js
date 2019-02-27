import { connect } from "react-redux";
import Home from "./Home";
import { fetchAllPins } from "../actions/actionPins";

const mapStateToProps = state => {
  // debugger;
  return {
    pins: Object.values(state.pins)
  };
};

const mapDispatchToProps = dispatch => {
  //debugger;
  return {
    fetchAllPins: () => dispatch(fetchAllPins())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
