import {createSlice} from "@reduxjs/toolkit";
import {mergeArray} from "../commanUtils";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trailerVideo: null,
    movieIcon: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = mergeArray(
        state.nowPlayingMovies,
        action.payload,
      );
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = mergeArray(state.popularMovies, action.payload);
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = mergeArray(state.topRatedMovies, action.payload);
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = mergeArray(state.upcomingMovies, action.payload);
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addMovieIcon: (state, action) => {
      state.movieIcon = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTrailerVideo,
  addMovieIcon,
} = moviesSlice.actions;
export default moviesSlice.reducer;
