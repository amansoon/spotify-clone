import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type LibraryItem = object[] | null;

export interface LibraryState {
  likedSongs: LibraryItem;
  playlists: LibraryItem;
  episodes: LibraryItem;
  podcasts: LibraryItem;
  albums: LibraryItem;
  artists: LibraryItem;
}

const initialState: LibraryState = {
  playlists: null,
  episodes: null,
  podcasts: null,
  albums: null,
  artists: null,
  likedSongs: null,
};

export const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    setPlaylists: (state, action) => {
      state.playlists = action.payload
    },

    setEpisodes: (state, action) => {
      state.episodes = action.payload
    },

    setPodcasts: (state, action) => {
      state.podcasts = action.payload
    },

    setAlbums: (state, action) => {
      state.albums = action.payload
    },

    setArtists: (state, action) => {
      state.artists = action.payload
    },

    setLikedSong: (state, action) => {
      state.likedSongs = action.payload
    }
  },

});

// Action creators are generated for each case reducer function
export const { setPlaylists, setEpisodes, setPodcasts, setAlbums, setArtists, setLikedSong } = librarySlice.actions;

export default librarySlice.reducer;
