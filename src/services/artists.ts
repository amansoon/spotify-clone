// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const accessToken =
  "BQBy7sT6dBY6iJa4dAwU70VJGYY66A-kcWj5ixuuHClV_9fuAU8RnX_YopjGeNWynbmJIh8sHOq47sHrLahtcKewjbHbyKLid1H4BIfpOLz_B-073mlj-PzY-rrEzYARFtDXWRHhVd2FpakfaCavjN_nZREAUf8Ds-lEqg42EWYCDz-qofDdYS7rITV0kXQ2uKZAZXM4nf10JJOU6UGGJC8";
const authHeader = {
  Authorization: "Bearer " + accessToken,
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
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }),
    }),

    getTopArtists: builder.query({
      query: () => ({
        url: `/me/artists`,
        method: "GET",
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }),
    }),

    getTopTracks: builder.query({
      query: () => ({
        url: `/me/tracks`,
        method: "GET",
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }),
    }),

    getFollowedArtists: builder.query({
      query: () => ({
        url: `/me/following`,
        method: "GET",
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }),
    }),

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProfileQuery, useGetTopArtistsQuery, useLazyGetTopTracksQuery, useGetFollowedArtistsQuery } = userApi;
