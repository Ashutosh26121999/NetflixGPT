// gpt slice
import {createSlice} from "@reduxjs/toolkit";
export const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    gptSearchResult: [],
  },
  reducers: {
    toggleGPTSearch: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    setGPTSearchResult: (state, action) => {
      state.gptSearchResult = action.payload;
    },
    clearGPTSearchResult: (state) => {
      state.gptSearchResult = [];
    },
  },
});
export const {toggleGPTSearch, setGPTSearchResult, clearGPTSearchResult} =
  gptSlice.actions;
export default gptSlice.reducer;
