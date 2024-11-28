import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginForm: true,
  isPasswordVisible: false,
  isSidebarVisible: true,
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

    toggleSidebarVisible(state) {
      state.isSidebarVisible = !state.isSidebarVisible;
    },

    collapseSidebar(state) {
      state.isSidebarVisible = false;
    },
  },
});

export const {
  setIsLoginForm,
  setPasswordVisible,
  toggleSidebarVisible,
  collapseSidebar,
} = appSlice.actions;
export default appSlice.reducer;
