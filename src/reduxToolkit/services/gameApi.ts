import { createApi } from "@reduxjs/toolkit/query/react";
import { gameUrl } from "../constants";

export const gameApi = createApi({
  reducerPath: "gameApi",
  baseQuery: gameUrl,
  endpoints: (builder) => ({
    getCharacters: builder.query<any, void>({
      query: () => ({
        url: "/characters",
        method: "GET",
      }),
    }),
    getCharacterDetails: builder.query<any, string>({
      query: (id: string) => ({
        url: `/character/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterDetailsQuery } = gameApi;
