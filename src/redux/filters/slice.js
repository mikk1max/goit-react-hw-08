import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    name: "",
    number: "",
  },
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilterName: (state, action) => {
      state.filters.name = action.payload;
    },
    changeFilterNumber: (state, action) => {
      state.filters.number = action.payload;
    },
  },
});

export const filtersReducer = slice.reducer;
export const { changeFilterName, changeFilterNumber } = slice.actions;
