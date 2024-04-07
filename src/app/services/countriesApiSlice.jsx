import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1" }),

  endpoints: (builder) => ({
    getAllCountries: builder.query({
      query: () => "/all",
    }),
    getCountryByAlphaCode: builder.query({
      query: (code) => `/alpha/${code}`,
    }),
    getCountriesByRegion: builder.mutation({
      query: (region) => ({
        url: `/region/${region}`,
        method: "GET",
      }),
    }),
    getCountriesByName: builder.mutation({
      query: (name) => {
        return {
          url: `/name/${name}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetAllCountriesQuery,
  useGetCountryByAlphaCodeQuery,
  useGetCountriesByRegionMutation,
  useGetCountriesByNameMutation,
} = countriesApi;
