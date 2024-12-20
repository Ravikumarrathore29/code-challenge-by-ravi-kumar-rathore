import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URLS } from '../../api/constant';

import { IPokimonData } from './pokimon.type';

//create a query function
export const pokimonApi = createApi({
    reducerPath: "pokimonData",
    baseQuery: fetchBaseQuery({
        //Api endpoint
        baseUrl: `${API_URLS.GET_ALL_POKIMON_DATA.URL}`
    }),
    tagTypes:['Pokemon'],
    endpoints: (builder) => ({
        //query function , Get 151 list of pokimon data task 1  
        fetchPokimonData: builder.query<IPokimonData, void>({
            query: () => `${'?' + API_URLS.GET_ALL_POKIMON_DATA.LIMIT + '=' + API_URLS.GET_ALL_POKIMON_DATA.VALUE}`,
           
            // async onQueryStarted(id, { dispatch, queryFulfilled }) {
            //     // `onStart` side-effect
            //    // dispatch(messageCreated('Fetching post...'))
            //     try {
            //       const { data } = await queryFulfilled
            //       // `onSuccess` side-effect
            //       dispatch(messageCreated('Post received!'))
            //     } catch (err) {
            //       // `onError` side-effect
            //       dispatch(messageCreated('Error fetching post!'))
            //     }
            //   },
        })


    }),

});


//use query hooks to execute the query
export const { useFetchPokimonDataQuery  } = pokimonApi

