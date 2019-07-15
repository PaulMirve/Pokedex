import { combineReducers } from "redux";

import pokemonReducers from './PokemonReducers';
import fetchPokemonReducer from './FetchPokemonReducer';
import fetchSpeciesReducer from './FetchSpeciesReducer';
import loadingReducer from './LoadingReducer';

export default combineReducers({
    pokemons: pokemonReducers,
    pokemon: fetchPokemonReducer,
    species: fetchSpeciesReducer,
    isLoading: loadingReducer,
});