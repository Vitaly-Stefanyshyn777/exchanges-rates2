import { createSelector } from "@reduxjs/toolkit";

export const selektBaseCurrency = (state) => state.currency.baseCurrency;
export const selektExchangeInfo = (state) => state.currency.exchangeInfo;
export const selektIsLoading = (state) => state.currency.isLoading;
export const selektIsError = (state) => state.currency.isError;
export const selektRates = (state) => state.currency.rates;
export const selektFilterQuery = (state) => state.filter.filterQuery;
export const selectFiltereRates = createSelector(
  [selektRates, selektFilterQuery],
  (rates, filterQuery) => {
    console.log(rates);
    return rates.filter(([current]) => {
      console.log(current);
      return current.toLowerCase().includes(filterQuery.toLowerCase());
    });
  }
);
