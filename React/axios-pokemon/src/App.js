import Pokemon from './components/Pokemon'
import React , {useState} from 'react';
import Result from './components/Result';

function App() {
  const [pokemon , setPokemon] = useState([]);
  return (
    <div className="App">
      <Pokemon setP={setPokemon} />
      <Result p={pokemon} />
    </div>
  );
}

export default App;
