// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const accessToken = "BQAFs_uwNBpK3UY7UP9zsXS3nU82Ll9pZb-vDAX7wk1Kg91yj4TLigZTz5bhVuT9uvayR54U6MM6S5t1MPTE94EXInRRIlnejauiLDKVl69ZVMT_ys6YSfTSUM-EyUrqgbO-POinT8IdFfNf5k7pTBfs0UPOxWbrUJsroDQLxX95VUbLRgJck2gkrOg2YGlkQB-PtIxqo35wqgHYLrdtx65WoQ4Kmeh6dKXP5PLEgwx6GTQHFkeA1Z5SneE9RVZkcJQMMbw_suww7nk5qiTeBVw6shDI1DJGbepUvBjuaACOEdj6hEMa8gW3IURlf6GH98ZaG6EByXgNmcb3mXkc-w"

const headers = {
  Authorization: `Bearer ${accessToken}`,
  "Content-Type": "application/json",
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
        headers: headers,
      }),
    }),

    getTopArtists: builder.query({
      query: () => ({
        url: `/me/top/artists`,
        method: "GET",
        headers: headers,
      }),
    }),

    getTopTracks: builder.query({
      query: () => ({
        url: `/me/top/tracks`,
        method: "GET",
        headers: headers,
      }),
    }),

    getFollowedArtists: builder.query({
      query: () => ({
        url: `/me/following?type=artist`,
        method: "GET",
        headers: headers,
      }),
    }),

    getGenres: builder.query({
      query: () => ({
        url: `/recommendations/available-genre-seeds`,
        method: "GET",
        headers: headers,
      }),
    }),

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProfileQuery, useGetTopArtistsQuery, useGetTopTracksQuery, useGetFollowedArtistsQuery, useGetGenresQuery } = userApi;
