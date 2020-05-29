import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchPokemon from './../../redux/actions/searchAction';

const SearchPokemon = () => {
    const dispatch = useDispatch();
    const {pokemon_name, set_pokemon_name} = useState('mewtwo');
    return(
        <div className="form-group">
            <label className="text-withe">Search pokemon</label>
            <input type="text" className="form-control" id="Search_pokemon" value={pokemon_name}
            onChange={
                (event) => {
                    set_pokemon_name(event.target.value);
                }
            }/>
            <button className="btn btn-primary mt-3" onClick={
                () => {
                    dispatch(fetchPokemon(pokemon_name))
                }
            }>Send</button>
        </div>
    );
}

export default SearchPokemon