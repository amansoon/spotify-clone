// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const accessToken = "BQAcrZCwyRiYs-w1dQLTv2O4ASjUH6W8eKhoFf45QncQcinisJZiCcd9XrVMeeLB0BqY9bzDIXQtVqGaZk-Lyket9sZdZh6F_cKnO_2Cf6xy1_rhVbU4gEv8O3Qp1nB1u08dLTESTyQEwNrIPkocZQ2pUoHUAbo-wz7eomrMcbKhU6chZw6DHfX6a3YjhAP0WAXgOhTtzOmRIraxHIjo_a3qMO3EoB52ZS1fyO9HLdLVs9Fd6qVXovcxngdH7-a7VmvXf9SztHiEAX1TZY353VzxFOkZ_Y9hKomBBWOWeb1Q898eoqb88GnFURNivHdLSb2MRJopkUU6jj7MZ7eF2w"

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
