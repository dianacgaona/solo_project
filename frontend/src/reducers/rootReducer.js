import { combineReducers } from "redux";
import { pinsReducer } from "./pinsReducer";
import { authenticationReducer } from "./authenticationReducer";
import { sessionReducer } from "./sessionReducer";

const rootReducer = combineReducers({
  pins: pinsReducer,
  toggle: authenticationReducer,
  session: sessionReducer
});

export default rootReducer;
