import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const booksApi = createApi({
    //name of the api slice
    reducerPath: "booksApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://gutendex.com",// base URL for all API calls
        prepareHeaders: (headers) => headers.set("Content-Type", "application/json")
    }),
    // API endpoints
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: (page) => `/books?page=${page}`
        }),
        getByAscending: builder.query({
            query: (page) => `/books?page=${page}&sort=ascending`
        }),
        getByDescending: builder.query({
            query: (page) => `/books?page=${page}&sort=descending`
        }),
        getSingleBook: builder.query({
            query: (id) => `/books/${id}`
        }),
        getSearch: builder.query({
            query: ({ search, page }) => `/books?page=${page}&search=${search}`
        }),
        getSearchByDate: builder.query({
            query: ({ start, end, page }) => `/books?page=${page}&author_year_start=${start}&author_year_end=${end}`
        }),
        getSearchByTopic: builder.query({
            query: ({ topic, page }) => `/books?page=${page}&topic=${topic}`
        })
    })
});

export default booksApi;

export const {
    useGetBooksQuery,
    useGetByAscendingQuery,
    useGetByDescendingQuery,
    useGetSingleBookQuery,
    useGetSearchQuery,
    useGetSearchByDateQuery,
    useGetSearchByTopicQuery
} = booksApi;