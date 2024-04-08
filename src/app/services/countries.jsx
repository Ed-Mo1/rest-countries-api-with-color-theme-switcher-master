import { createSlice } from "@reduxjs/toolkit";
import { countriesApi } from "./countriesApiSlice";

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
    loading: true,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        countriesApi.endpoints.getAllCountries.matchFulfilled,
        (state, action) => {
          state.countries = action.payload;
          state.loading = false;
        }
      )
      .addMatcher(
        countriesApi.endpoints.getAllCountries.matchRejected,
        (state, action) => {
          state.error = action.error.message;
          state.loading = false;
        }
      )
      .addMatcher(
        countriesApi.endpoints.getCountriesByRegion.matchFulfilled,
        (state, action) => {
          state.countries = action.payload;
          state.error = null;
          state.loading = false;
        }
      )
      .addMatcher(
        countriesApi.endpoints.getCountriesByRegion.matchPending,
        (state) => {
          state.error = null;
          state.loading = true;
        }
      )
      .addMatcher(
        countriesApi.endpoints.getCountriesByRegion.matchRejected,
        (state, action) => {
          state.error = action.error.message;
          state.loading = false;
        }
      )
      .addMatcher(
        countriesApi.endpoints.getCountriesByName.matchFulfilled,
        (state, action) => {
          state.countries = action.payload;
          state.loading = false;
        }
      )
      .addMatcher(
        countriesApi.endpoints.getCountriesByName.matchPending,
        (state) => {
          state.error = null;
          state.loading = true;
        }
      )
      .addMatcher(
        countriesApi.endpoints.getCountriesByName.matchRejected,
        (state, action) => {
          state.error = action.error.message;
          state.loading = false;
          state.countries = [];
        }
      );
  },
});

export default countriesSlice.reducer;
