import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../databases/realtimeDatabase";

export const reservationApi = createApi({
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
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
            }
        })
    })
})
export const {useGetCategoriesQuery, useGetModelsByCategoryQuery, useGetModelsByIdQuery} = reservationApi