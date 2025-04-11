import { createSlice } from "@reduxjs/toolkit";
import {
  fetchBaseCurrency,
  fetchExchangeCurrency,
  fetchlatestRates,
} from "./operation";

export const slice = createSlice({
  name: "contacts",
  initialState: {
    baseCurrency: "",
    exchangeInfo: null,
    isLoading: false,
    isError: null,
    rates: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBaseCurrency.fulfilled, (state, action) => {
        state.baseCurrency = action.payload;
      })
      .addCase(fetchExchangeCurrency.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchExchangeCurrency.fulfilled, (state, action) => {
        state.isLoading = false;
        state.exchangeInfo = action.payload;
      })
      .addCase(fetchExchangeCurrency.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(fetchlatestRates.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchlatestRates.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rates = action.payload;
      })
      .addCase(fetchlatestRates.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});
export const currencyReducer = slice.reducer;
