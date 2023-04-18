import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://64393e791b9a7dd5c962b213.mockapi.io/users/'
    }),
    endpoints: builder => ({
        fetchUser: builder.query({
            query: () => '/users'
        }),
        following: builder.mutation({
            query: ({ id, patch }) => ({
                url: `/users/${id}`,
                method: 'PATCH',
                body: patch
            })
        })
    })
})

export const { useFetchUserQuery } = usersApi