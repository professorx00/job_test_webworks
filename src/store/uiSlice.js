import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.menu = !state.menu;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openMenu } = uiSlice.actions;

export default uiSlice.reducer;
