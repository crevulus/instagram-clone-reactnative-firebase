import { combineReducers } from "redux";
import { user } from "./userReducer";

const reducers = combineReducers({
  userState: user,
});

export default reducers;
