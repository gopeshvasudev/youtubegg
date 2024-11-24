import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popularMovies: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addPopularMovies(state, action) {
      state.popularMovies = action.payload;
    },
  },
});

export default moviesSlice.reducer;
export const { addPopularMovies } = moviesSlice.actions;
