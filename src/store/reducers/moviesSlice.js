import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popularMovies: {
    movies: null,
  },
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addPopularMovies(state, action) {
      state.popularMovies.movies = action.payload;
    },
  },
});

export default moviesSlice.reducer;
export const { addPopularMovies, setChannelProfilePicture } =
  moviesSlice.actions;
