import React from 'react'
import { useSelector } from 'react-redux';

const ResultPokemon = () => {
    const search = useSelector((state => state.search));
    return( 
        <div>
            <h3 className="text-white">Result: </h3>
            {search.loading && <div className="text-warning">Searching...</div>}
            {search.pokemon.length > 1 && 
            <div className="text-success">
                <img src={search.pokemon[0].sprites.front_default}alt="pokemon"/>
            <span>{search.pokemon[0].name}</span>
            </div>}
            {search.error !== '' && <span className="text-danger">{search.error}</span>}
        </div>
    );
}

export default ResultPokemon;