import pokeapi from '../apis/PokeAPI';

export const FETCH_POKEMONS = 'FETCH_POKEMONS';
export const FETCH_POKEMON = 'FETCH_POKEMON';
export const FETCH_SPECIES = 'FETCH_SPECIES';
export const IS_LOADING = 'IS_LOADING';

export const fetchPokemons = () => {
    return async dispatch=>{
        const response = await pokeapi.get('/pokemon/?limit=964');
        dispatch({type: FETCH_POKEMONS, payload: response.data.results});
    }
}

export const fetchPokemon = (url) => {
    return async dispatch =>{
        const response = await fetch(url);
        const pokemon = await response.json();
        dispatch({type:FETCH_POKEMON, payload: pokemon});
    }
}

export const fetchSpecies = url =>{
    return async dispatch =>{
        const response = await fetch(url);
        const species = await response.json();
        dispatch({type: FETCH_SPECIES, payload: species});
    }
}

export const isLoading = (payload) => ({
    type: IS_LOADING,
    payload
})



