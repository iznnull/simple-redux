import React from 'react';
import './App.css';
import './comoponents/search/SearchPokemon'

function App() {
  return (
    <div className="App">
      <div className="col-12 mt-4 border-top pt-3">
        <SearchPokemon></SearchPokemon>
      </div>
    </div>
  );
}

export default App;
