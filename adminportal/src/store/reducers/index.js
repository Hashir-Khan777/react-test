import { combineReducers } from "redux";
import CustomerReducer from "./customer";

export default combineReducers({
  customer: CustomerReducer,
});
