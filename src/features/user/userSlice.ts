import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  user: object | null;
  topArtists: object[] | null;
  topTracks: object[] | null;
  followedArtists: object[] | null;
}

const initialState: UserState = {
  user: null,
  topArtists: null,
  topTracks: null,
  followedArtists: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

    setUser: (state, action) => {
      state.user = action.payload
    },

    setTopArtists: (state, action) => {
      state.topArtists = action.payload
    },

    setTopTracks: (state, action) => {
        state.topArtists = action.payload
    },

    setTopFollowedArtists: (state, action) => {
        state.followedArtists = action.payload
    },

  },
});

// Action creators are generated for each case reducer function
export const { setUser, setTopArtists, setTopTracks, setTopFollowedArtists } = userSlice.actions;

export default userSlice.reducer;
