import { FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCES, FETCH_POKEMON_FAILURE } from '../../actions/searchAction';

const initialState = {
    loading: false,
    pokemon: [], 
    error: ''
}

const search = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POKEMON_REQUEST:
            return {
                ...state, 
                loading: true
            }

        case FETCH_POKEMON_SUCCES:
            return {
                ...state,
                loading: false,
                pokemon: action.payload
            }            
        case FETCH_POKEMON_FAILURE:
            return {
                ...state,
                loading: false,
                pokemon: [],
                error: action.payload
            }

        default:
    }
}