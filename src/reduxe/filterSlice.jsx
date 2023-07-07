import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = "";
const filterSlice = createSlice({
  name: "contact",
  initialState: filtersInitialState,
  reducers: {
    filter(state, action) {
      return state = action.payload;
    },
  },
});

export const { filter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;