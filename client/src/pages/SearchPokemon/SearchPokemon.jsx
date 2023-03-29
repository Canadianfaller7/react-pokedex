import './searchPokemon.css'
import { PokemonInfo } from '../../components/index'
const SearchPokemon = () => {

 return (
   <div className='search-pokemon'>
    <div className='pokemon-title'>
     <h1>
      Search Pokemon
     </h1>
     <PokemonInfo/>
    </div>
   </div>
 )
}

export default SearchPokemon