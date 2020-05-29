import React from 'react'

const ResultPokemon = () => {
    return( 
        <div>
            <h3 className="text-white">Result: </h3>
            <div className="text-warning">Searching...</div>
            <div className="text-success"><img src="" alt=""/><span>pikachu</span></div>
        </div>
    );
}

export default ResultPokemon;