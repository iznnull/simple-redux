import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchPokemon = () => {
    const dispatch = useDispatch();
    const {pokemon_name, set_pokemon_name} = useState('mewtwo');
    return(
        <div className="form-group">
            <label className="text-withe">Search pokemon</label>
            <input type="text" className="form-control" id="Search_pokemon"/><button className="btn btn-primary mt-3">Send</button>
        </div>
    );
}

export default SearchPokemon