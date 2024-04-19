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
        getSingleBook: builder.query({
            query: (id) => `/books/${id}`
        }),
        getSearch: builder.query({
            query: (search) => `/books?search=${search}`
        }),
    })
});
export default booksApi;
export const {
    useGetBooksQuery,
    useGetSingleBookQuery,
    useGetSearchQuery
} = booksApi;