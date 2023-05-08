import { configureStore } from "@reduxjs/toolkit";
import desktopReducer from "../features/desktop/desktopSlice";

export const store = configureStore({
  reducer: {
    desktop: desktopReducer,
  },
});
