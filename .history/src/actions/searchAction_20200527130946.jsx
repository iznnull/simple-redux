export const FETCH_POKEMON_REQUEST = FETCH_POKEMON_REQUEST;
export const FETCH_POKEMON_SUCCES = FETCH_POKEMON_SUCCES;
export const FETCH_POKEMON_FAILURE = FETCH_POKEMON_FAILURE;

//Actions
export const fetchPokemonRequest = () => {
    return {
        type: FETCH_POKEMON_REQUEST
    }
}

export const fetchPokemonSuccess = (Pokemon) => {
    return {
        type: FETCH_POKEMON_SUCCES,
        payload: Pokemon
    }
}

export const fetchPokemonFailure = (error) => {
    return {
        type: FETCH_POKEMON_FAILURE,
        payload: error
    }
}

const fetchPokemon = (valor) => {
    return (dispatch) => {
        dispatch(fetchPokemonRequest());
    }
}

export default fetchPokemon;