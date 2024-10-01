import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllMovies, getSearchMovies } from "../Service/movie-service";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", getAllMovies);
export const fetchSearchMovies = createAsyncThunk(
  "movies/fetchSearchMovies",
  getSearchMovies
);
const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    movies: [],
    totalPage: 0,
    search: "",
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.movies = payload.data.results;
      state.totalPage = payload.data.total_pages;
    });
    builder.addCase(fetchSearchMovies.fulfilled, (state, { payload }) => {
      state.movies = payload.data.results;
      state.totalPage = payload.data.total_pages;
    });
  },
});
export const { setSearch } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
