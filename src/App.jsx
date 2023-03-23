import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPokemon from './components/SearchPokemon';
import './App.css';

const App = () => {
  const pokemonEncounter = SearchPokemon();
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={pokemonEncounter} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
