import { configureStore } from "@reduxjs/toolkit";
import { gameApi } from "./services/gameApi";
import { gameReducer } from "./features";

export const store = configureStore({
  reducer: {
    game: gameReducer,
    [gameApi.reducerPath]: gameApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gameApi.middleware),
});
