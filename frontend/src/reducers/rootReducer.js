import { combineReducers } from "redux";
import { pinsReducer } from "./pinsReducer";
import { authenticationReducer } from "./authenticationReducer";

const rootReducer = combineReducers({
  pins: pinsReducer,
  toggle: authenticationReducer
});

export default rootReducer;
