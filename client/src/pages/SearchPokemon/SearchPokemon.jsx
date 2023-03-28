import './searchPokemon.css'
import { PokeDetails } from '../../components/index'
const SearchPokemon = () => {

 return (
   <div className='search-pokemon'>
    <div className='pokemon-title'>
     <h1>
      Search Pokemon
     </h1>
     <PokeDetails/>
    </div>
   </div>
 )
}

export default SearchPokemon