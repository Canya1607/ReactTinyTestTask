import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRepos } from "../../api/search";

const initialState = {
  items: [],
  pageItems: [],
  maxPage: 0,
};

// Async
export const fetchPageItems = createAsyncThunk("desktop/fetchPageItems", async ({ input, maxCount }) => {
  const response = await getRepos(input, maxCount);
  if (response.status === 200) {
    return response.data.items;
  }
});

export const desktopSlice = createSlice({
  name: "desktop",
  initialState,
  reducers: {
    setPageItems: (state, action) => {
      state.pageItems = [...action.payload.pageItems];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPageItems.fulfilled, (state, action) => {
      if (action.payload) {
        state.items = [...action.payload];
      }
    });
  },
});

// Actions
export const { setPageItems } = desktopSlice.actions;

// Selectors
export const selectItems = (state) => state.desktop.items;
export const selectPageItems = (state) => state.desktop.pageItems;

// Reducer
export default desktopSlice.reducer;
