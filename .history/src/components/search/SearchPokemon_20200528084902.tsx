import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchPokemon from '../../redux/actions/searchAction';

const SearchPokemon = () => {
    const dispatch = useDispatch();
    const [pokemonName, setPokemonName] = useState('mewtwo');
    return(
        <div className="form-group">
            <label className="text-withe">Search pokemon</label>
            <input type="text" className="form-control" id="Search_pokemon" value={pokemonName}
            onChange={
                (event) => {
                    setPokemonName(event.target.value);
                }
            }/>
            <button className="btn btn-primary mt-3" onClick={
                () => {
                    dispatch(fetchPokemon(pokemonName))
                }
            }>Send</button>
        </div>
    );
}

export default SearchPokemon