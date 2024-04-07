import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { countriesApi } from "./services/countriesApiSlice";
import countriesSlice from "./services/countries";
const store = configureStore({
  reducer: {
    countries: countriesSlice,
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware),
});
export default store;

setupListeners(store.dispatch);
