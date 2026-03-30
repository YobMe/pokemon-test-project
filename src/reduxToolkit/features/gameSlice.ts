import { createSlice } from "@reduxjs/toolkit";
import { gameApi } from "../services/gameApi";

const initialState = {
  characters: [],
};

const slice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action?.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      gameApi.endpoints.getCharacters.matchFulfilled,
      (state, action) => {
        if (action.payload?.length > 0) {
          state.characters = action.payload;
        }
      },
    );
  },
});

export const { setCharacters } = slice.actions;
export default slice.reducer;
