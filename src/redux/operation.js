import { createAsyncThunk } from "@reduxjs/toolkit";
import { exchangeCurrency, latestRates } from "../servises/exchsngesAPI";
import { getUserInfo } from "../servises/opencage";

export const fetchExchangeCurrency = createAsyncThunk(
  "carrency/fetcexchangesCurrensy",
  async (credentials, thunkApi) => {
    try {
      const data = await exchangeCurrency(credentials);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchBaseCurrency = createAsyncThunk(
  "carrency/fetchbase",
  async (coords, thunkApi) => {
    const state = thunkApi.getState();
    if (state.currency.baseCurrency) {
      return state.currency.baseCurrency;
    }
    try {
      const data = await getUserInfo(coords);
      return data.results[0].annotations.currency.iso_code;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchlatestRates = createAsyncThunk(
  "carrency/fetchlatestSymbols",
  async (baseCurrency, thunkApi) => {
    try {
      const date = await latestRates(baseCurrency);
      return date;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
