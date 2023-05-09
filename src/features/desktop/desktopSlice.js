import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRepos } from "../../api/search";

const initialState = {
  pageItems: [],
};

// Async
export const fetchPageItems = createAsyncThunk("desktop/fetchPageItems", async ({ q, per_page, page }) => {
  try {
    const response = await getRepos(q, per_page, page);
    return response.data.items;
  } catch (e) {
    return [];
  }
});

export const desktopSlice = createSlice({
  name: "desktop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPageItems.fulfilled, (state, action) => {
      if (action.payload) {
        state.pageItems = [...action.payload];
      }
    });
  },
});

// Actions

// Selectors
export const selectItems = (state) => state.desktop.items;
export const selectPageItems = (state) => state.desktop.pageItems;

// Reducer
export default desktopSlice.reducer;
