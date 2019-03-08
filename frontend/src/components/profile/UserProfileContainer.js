import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchOneUser } from "../../actions/actionUsers";
import UserProfile from "./UserProfile";

const mapStateToProps = state => {
  console.log("STATE:", state);
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOneUser: () => dispatch(fetchOneUser())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserProfile)
);
