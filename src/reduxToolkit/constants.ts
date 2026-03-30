import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseUrl = "";

export const defaultUrl = fetchBaseQuery({
  baseUrl: `${baseUrl}/`,
});

export const gameUrl = fetchBaseQuery({
  baseUrl: `${baseUrl}/game`,
});
