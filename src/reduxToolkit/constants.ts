import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseUrl =
  "https://01357078-4b48-4447-94d3-b0821c3a2e7e.mock.pstmn.io";

export const defaultUrl = fetchBaseQuery({
  baseUrl: `${baseUrl}/`,
});

export const gameUrl = fetchBaseQuery({
  baseUrl: `${baseUrl}/`,
});
