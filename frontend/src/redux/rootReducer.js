import { combineReducers } from "@reduxjs/toolkit";
import reducer from "./reducer";

// Combine reducers to create the root reducer
const rootReducer = combineReducers({
  images: reducer,
});

// Export the root reducer
export default rootReducer;
