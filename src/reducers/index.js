import { combineReducers } from "redux";
import { resultReducer } from "./result";
import { stepReducer } from "./step";

export const allReducers = combineReducers({
  // a function with an object in it
  result: resultReducer,
  step: stepReducer,
});
