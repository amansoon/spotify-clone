import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  genres: string[] | null;
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: AppState = {
  genres: null,
  accessToken:
    "BQBIPo39zL5nvq07m3K_PI-F8svDLdGif72Ho4VCbci83vOM5S4TqlnlWDTNlZycp1dTDfF1ib_9ib5QBkcwZUzqoD2pnSC4xR7S9T2rA1fK_GetRoYAFC71Hlzl4KtfqkdgyJIMpM6tW6Hv_6ZDGW_l71VLZNAZL9mjmbZT34TE5Edi0jYaGpTmbRGQHti6yPWSPPJwgNJQ-3goN58Wo6vyGWe6YsDNRZYweZY1L0U6dfQ93sGchDtwH0iSd77_Ium7TqAPMa_RZGG2SV1NnasavZMEEWaAcZK8khJMeXPOlzD-9Xi9XSkf8-IDuREecYLCcCY7ASQoq2Ze5sWt0g",
  refreshToken: null,
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
