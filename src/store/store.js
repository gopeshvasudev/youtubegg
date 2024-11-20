import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers/appSlice";
import authReducer from "./reducers/authSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
  },
});

export default store;
