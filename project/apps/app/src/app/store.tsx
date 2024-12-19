import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { pokimonApi } from './service/pokimonData';

export const store = configureStore({
    reducer: {
        [pokimonApi.reducerPath]: pokimonApi.reducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokimonApi.middleware),
});


setupListeners(store.dispatch);