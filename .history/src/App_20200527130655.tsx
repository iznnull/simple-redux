import React from 'react';
import './App.css';
import SearchPokemon from './components/search/SearchPokemon';
import ResultPokemon from './components/search/ResultPokemon';

function App() {
  return (
    <div className="App">
      <div className="col-12 mt-4 border-top pt-3">
        <SearchPokemon></SearchPokemon>
      </div>
      <div className="col-12">
      <ResultPokemo></ResultPokemon>
      </div>
    </div>
  );
}

export default App;
