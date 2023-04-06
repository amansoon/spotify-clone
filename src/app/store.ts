import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import appReducer from "../features/app/appSlice";
import userReducer from "../features/user/userSlice";
import libraryReducer from "../features/library/librarySlice";

import { playlistApi } from "../services/playlist";

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    library: libraryReducer,
    // Add the generated reducer as a specific top-level slice
    [playlistApi.reducerPath]: playlistApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(playlistApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
