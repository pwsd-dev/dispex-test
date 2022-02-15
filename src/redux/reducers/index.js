import { combineReducers } from "redux";
import streets from "./items";

const rootReducer = combineReducers({
  streets: streets,
});

export default rootReducer;
