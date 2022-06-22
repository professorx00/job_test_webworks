import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: false,
  search: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.menu = !state.menu;
    },
    openSearch: (state) => {
      state.search = !state.search;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openMenu, openSearch } = uiSlice.actions;

export default uiSlice.reducer;
