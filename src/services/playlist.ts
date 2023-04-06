// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const accessToken =
  "BQBy7sT6dBY6iJa4dAwU70VJGYY66A-kcWj5ixuuHClV_9fuAU8RnX_YopjGeNWynbmJIh8sHOq47sHrLahtcKewjbHbyKLid1H4BIfpOLz_B-073mlj-PzY-rrEzYARFtDXWRHhVd2FpakfaCavjN_nZREAUf8Ds-lEqg42EWYCDz-qofDdYS7rITV0kXQ2uKZAZXM4nf10JJOU6UGGJC8";
const authHeader = {
  Authorization: "Bearer " + accessToken,
};

// Define a service using a base URL and expected endpoints
export const playlistApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.spotify.com/v1" }),
  endpoints: (builder) => ({
    getAllPlaylist: builder.query({
      query: (name) => ({
        url: `/me/playlists`,
        method: "GET",
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }),
    }),

    createPlaylist: builder.mutation({
      query: (name) => `pokemon/${name}`,
    }),

    changePlaylistDetails: builder.query({
      query: ({ name, cover }) => ({
        url: `post/`,
        method: "PATCH",
      }),
    }),

    getPlaylist: builder.query({
      query: (name) => `pokemon/${name}`,
    }),

    addItemToPlaylist: builder.query({
      query: (name) => `pokemon/${name}`,
    }),

    removeItemFromPlaylist: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPlaylistQuery } = playlistApi;
