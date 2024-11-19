import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginForm: true,
  isPasswordVisible: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsLoginForm(state) {
      state.isLoginForm = !state.isLoginForm;
    },

    setPasswordVisible(state) {
      state.isPasswordVisible = !state.isPasswordVisible;
    },
  },
});

export const { setIsLoginForm, setPasswordVisible } = appSlice.actions;
export default appSlice.reducer;
