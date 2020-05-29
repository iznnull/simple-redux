import React from 'react'

const ResultPokemon = () => {
    return( 
        <div>
            <h3 className="text-white">Result: </h3>
            <div className="text-warning">Searching...</div>
            <div className="text-success">
                <img src="" alt=""/>
                <span>pikachu</span>
            </div>
            <span className="text-danger">Error</span>
        </div>
    );
}

export default ResultPokemon;