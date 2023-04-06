import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  profile: object | null;
  topArtists: object[] | null;
  topTracks: object[] | null;
  followedArtists: object[] | null;
}

const initialState: UserState = {
  profile: null,
  topArtists: null,
  topTracks: null,
  followedArtists: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

    setProfile: (state, action) => {
      state.profile = action.payload
    },

    setTopArtists: (state, action) => {
      state.topArtists = action.payload
    },

    setTopTracks: (state, action) => {
        state.topTracks = action.payload
    },

    setFollowedArtists: (state, action) => {
        state.followedArtists = action.payload
    },

  },
});

// Action creators are generated for each case reducer function
export const { setProfile, setTopArtists, setTopTracks, setFollowedArtists } = userSlice.actions;

export default userSlice.reducer;
