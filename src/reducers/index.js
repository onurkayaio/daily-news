import { combineReducers } from "redux";
import articles from "./article";
import gallery from "./gallery";

const rootReducer = combineReducers({
  articles,
  gallery
});

export default rootReducer;
