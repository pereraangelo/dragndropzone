import { combineReducers } from "redux";
import shapesReducer from "./shapesReducer";
export default combineReducers({
  state: shapesReducer,
});
