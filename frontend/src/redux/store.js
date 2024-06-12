import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { thunk } from "redux-thunk";

// Configure the Redux store with the root reducer and thunk middleware
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

// Export the configured store
export default store;
