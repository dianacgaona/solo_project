import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PinList from "./PinList.js";
import { fetchAllPins } from "../../actions/actionPins.js";

const mapStateToProps = state => {
  return {
    pins: Object.values(state.pins)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPins: () => dispatch(fetchAllPins())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PinList)
);
