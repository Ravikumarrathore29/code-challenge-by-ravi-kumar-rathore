import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { pokimonApi } from './pokimonData';

interface PokémonState {
    pokemon: any[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: PokémonState = {
    pokemon: [],
    status: 'idle',
};

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        savePokimonData(state, action: PayloadAction<any>) {
            console.log("hello", state)
            state.pokemon.push(action.payload);
        },
        pokemonAdded(state, action: PayloadAction<any>) {
            console.log("HI ", state)
            state.pokemon.push(action.payload);
        },
        pokemonRemoved(state, action: PayloadAction<any>) {
            console.log("state", state)
            state.pokemon = state.pokemon.filter((pokemon) => pokemon.name !== action.payload);
        },
    },

    //   extraReducers: (builder) => {
    //     builder
    //       .addCase(pokimonApi.endpoints.fetchPokimonData.initiate.pending, (state) => {
    //         state.status = 'loading';
    //       })
    //       .addCase(pokimonApi.endpoints.fetchPokimonData.initiate.fulfilled, (state, action) => {
    //         state.status = 'succeeded';
    //         state.pokémon = action.payload.data.results;
    //       })
    //       .addCase(pokimonApi.endpoints.fetchPokimonData.initiate.rejected, (state) => {
    //         state.status = 'failed';
    //       });
    //   },
});

export const { pokemonAdded, pokemonRemoved  , savePokimonData} = pokemonSlice.actions;
export default pokemonSlice.reducer;