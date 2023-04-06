// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const accessToken =
  "BQB8FL7mGIUGVlerTMKie1c1fYR7-NNF2FCkVclcMIAwAxKZ1OpBin0P63fCDo0-TTbCuZdLrNeDbtFKwNi5R_PYg0W4ndozcPWulkiqR7PnL7zAQQjfSnx4VcsQIIX1QeCkT3pawqhcksI3CtE8ufE5DcisBSf-Iuk6Is7KKlGSlZQL5-CqJNh8VX-rtoaexvfs8lAAh-Yl80_JZpEW_ix3NCtShsQTKFHmGCOrsmUMtrVhdRwliAzaJQn4Lca6io7J1H6e8MnH1s0ueand1lQDGRRtzJSntm7CHmTJ5UfUw-KFfUMnZlSWk9hiq2f8hmXEbwkotX5Ek1QqcEuwLQ";

const headers = {
  Authorization: `Bearer ${accessToken}`,
  'Content-Type': 'application/json',
};

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.spotify.com/v1" }),
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => ({
        url: `/me`,
        method: "GET",
        headers: headers
      }),
    }),

    getTopArtists: builder.query({
      query: () => ({
        url: `/me/top/artists`,
        method: "GET",
        headers: headers
      }),
    }),

    getTopTracks: builder.query({
      query: () => ({
        url: `/me/top/tracks`,
        method: "GET",
        headers: headers
      }),
    }),

    getFollowedArtists: builder.query({
      query: () => ({
        url: `/me/following?type=artist`,
        method: "GET",
        headers: headers
      }),
    }),

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProfileQuery, useGetTopArtistsQuery, useGetTopTracksQuery, useGetFollowedArtistsQuery } = userApi;
