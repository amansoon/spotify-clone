import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/app/appSlice";
import userReducer from "../features/user/userSlice";
import libraryReducer from "../features/library/librarySlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    library: libraryReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
