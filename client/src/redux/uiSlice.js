import { createSlice } from "@reduxjs/toolkit";

const storedUI = localStorage.getItem("ui");
const initialState = {
  ui: storedUI || "profile",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    addUI: (state, action) => {
      state.ui = action.payload;
      localStorage.setItem("ui", action.payload);
    },
    viewUI: (state, action) => {
      state.ui = action.payload;
      localStorage.setItem("ui", action.payload);
    },
    profileUI: (state, action) => {
      state.ui = action.payload;
      localStorage.setItem("ui", action.payload);
    },
  },
});

export const { addUI, viewUI, profileUI } = uiSlice.actions;
export default uiSlice.reducer;
