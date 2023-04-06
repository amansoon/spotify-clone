import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  genres: string[] | null;
}

const initialState: AppState = {
  genres: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGenres } = appSlice.actions;

export default appSlice.reducer;
