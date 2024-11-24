import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers/appSlice";
import authReducer from "./reducers/authSlice";
import moviesReducer from "./reducers/moviesSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    movies: moviesReducer,
  },
});

export default store;
