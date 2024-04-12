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
            query: () => "/books"
        })

    })
});
export default booksApi;
export const { useGetBooksQuery } = booksApi;