import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../databases/realtimeDatabase";

export const reservationApi = createApi({
    reducerPath: "reservationApi",
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    tagTypes: ['profileImageGet', 'getPickUps'],
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => `Categories.json`
        }),
        getModelsByCategory: builder.query({
            query: (category) => `Models.json?orderBy="category"&equalTo="${category}"`,
            transformResponse: (Response) => {
                const responseTransformed = Object.values(Response)
                return responseTransformed
            }
        }),
        getModelsById: builder.query({
            query: (modelId) => `Models.json?orderBy="id"&equalTo=${modelId}`,
            transformResponse: (Response) => {
                const responseTransformed = Object.values(Response)
                if (responseTransformed.length) return responseTransformed[0]
                return null
            },
        }),
        postReservation: builder.mutation({
            query: ({...reservation}) => ({
                url: 'PickUps.json',
                method: 'POST',
                body: reservation
            }),
            invalidatesTags: ['getPickUps']
        }),
        getProfileImage: builder.query({
            query: (localId) => `profileImages/${localId}.json`,
            providesTags: ['profileImageGet']
        }),
        postProfileImage: builder.mutation({
            query: ({image, localId}) => ({
                url: `profileImages/${localId}.json`,
                method: "PUT",
                body: {
                    image: image
                },
            }),
            invalidatesTags: ['profileImageGet'] 
        }),
        getPickUps: builder.query({
            query: () => `PickUps.json`,
            providesTags: ['getPickUps']
        }),
    }),
})
export const {
    useGetCategoriesQuery, 
    useGetModelsByCategoryQuery,
    useGetModelsByIdQuery,
    usePostReservationMutation,
    useGetProfileImageQuery,
    usePostProfileImageMutation,
    useGetPickUpsQuery
} = reservationApi