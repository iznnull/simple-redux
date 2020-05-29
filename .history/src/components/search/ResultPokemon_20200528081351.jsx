import React from 'react'
import { useSelector } from 'react-redux';

const ResultPokemon = () => {
    const search = useSelector((state => state.search));
    return( 
        <div>
            <h3 className="text-white">Result: </h3>
            {search.loading && <div className="text-warning">Searching...</div>}
            <div className="text-success">
                <img src="" alt=""/>
                <span>pikachu</span>
            </div>
            <span className="text-danger">Error</span>
        </div>
    );
}

export default ResultPokemon;