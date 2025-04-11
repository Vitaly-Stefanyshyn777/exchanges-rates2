import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterQuery: "",
  },
  reducers: {
    setFilterQuery: (state, action) => {
      state.filterQuery = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilterQuery } = filterSlice.actions;
