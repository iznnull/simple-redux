import { FETCH_POKEMON_REQUEST } from './../actions/searchAction';


const initialState = {

    loading: false,
    pokemon: [], 
    error: ''
}

const search = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POKEMON_REQUEST
    }
}