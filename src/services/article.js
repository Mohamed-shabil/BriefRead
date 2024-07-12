import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;
const options = {
    method: "POST",
    url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize-text",
    headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "75e29219c7mshd7fd121002d160fp1148afjsne8f718edc13c",
        "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
    },
};
export const articleApi = createApi({
    reducerPath: "articleApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
        prepareHeaders: (headers) => {
            headers.set("X-RapidAPI-Key", rapidApiKey);
            headers.set(
                "X-RapidAPI-Host",
                "article-extractor-and-summarizer.p.rapidapi.com"
            );
        },
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) =>
                `/summarize?url=${encodeURIComponent(
                    params.articleUrl
                )}&length=3`,
        }),
    }),
});

export const { useLazyGetSummaryQuery } = articleApi;
