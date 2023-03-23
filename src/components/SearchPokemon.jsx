import { useState } from 'react'
import Axios from 'axios'
import './searchPokemon.css'

const SearchPokemon = () => {

 const [pokemonId, setPokemonId] = useState()
 const [loading, setLoading] = useState(false)

 const searchPokemon = async () => {
  setLoading(true)

  try {
   setLoading(true)
   const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random(pokemonId) * 932) + 1}/`)
   const pokemonData = response.data.name
   console.log(pokemonData)
   setLoading(false)
    // setPokemonId(response.data.name)
    setPokemonId(pokemonData)
    // return pokemonData
  }catch (error) {
   console.log(error)
  }
 }


 return (
   <div className='search-pokemon'>
    <div className='pokemon-title'>
     <h1>
      Search Pokemon
     </h1>
     {/* <input 
      type="text" 
      onChange={e => setPokemonId(e.target.value)} 
     /> */}
     <button className='search-btn' onClick={searchPokemon}>Catch Pokemon</button>
     {loading ? <h4 className='text-white'>Loading...</h4> : ''}
     <h3 key={pokemonId}>{pokemonId}</h3>
    </div>
   </div>
 )
}

export default SearchPokemon