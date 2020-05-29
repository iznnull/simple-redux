import axios from 'axios';

export const FETCH_POKEMON_REQUEST = "FETCH_POKEMON_REQUEST";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE";


//Actions
export const fetchPokemonRequest = () => {
    return {
        type: FETCH_POKEMON_REQUEST
    }
}

export const fetchPokemonSuccess = (Pokemon: any[]) => {
    return {
        type: FETCH_POKEMON_SUCCESS,
        payload: Pokemon
    }
}

export const fetchPokemonFailure = (error: string) => {
    return {
        type: FETCH_POKEMON_FAILURE,
        payload: error
    }
}

const fetchPokemon = (valor: string) => {
    return (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
        dispatch(fetchPokemonRequest());
        axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
        .then(response => {
            dispatch(fetchPokemonSuccess([response.data]))
        })
        .catch(error => {
            dispatch(fetchPokemonFailure('Pokemon not found'));
        });
    }
}

export default fetchPokemon;