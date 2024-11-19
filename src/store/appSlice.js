import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginForm: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsLoginForm(state) {
      state.isLoginForm = !state.isLoginForm;
    },
  },
});

export const { setIsLoginForm } = appSlice.actions;
export default appSlice.reducer;
