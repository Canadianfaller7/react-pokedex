import { useState, useEffect } from "react";
import Axios from "axios";
import { GeneratePokemon } from "../index";
import "./pokemonInfo.css";

const PokemonStats = () => {
  // setting the state to bulbasaur to have a base pokemon when first searching
  const [pokemon, setPokemon] = useState({});
  // set loading state to false since we aren't loading anything yet
  const [loading, setLoading] = useState(false);
  
  // function to make api call to get information about pokemon
  const searchPokemon = async () => {
    try {
      // setting loading state to true
      setLoading(true);

      // fetching random pokemon id
      const response = await Axios.get(
        `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 983) + 1}/`
      );
      // setting pokemon state to the random id and getting values from api response
      setPokemon({
        id: response.data.id,
        name: response.data.name,
        type: response.data.types.map((type) => type.type.name.split(" ")).join(", "),
        height: response.data.height,
        weight: response.data.weight,
        image: response.data.sprites.other["official-artwork"].front_default,
        stats: response.data.stats,
      });
      // set loading to false again now we have our data
      setLoading(false);
      // catch and console log any errors
    } catch (error) {
      console.log(error);
    }
  };
  
  // this is 
  useEffect(() => {
    searchPokemon()
  }, []);
  console.log(pokemon);

  

  return (
    <>
      <div className='pokemon-search'>
        <GeneratePokemon onClick={searchPokemon} />
      </div>
      <div className='pokemon-info'>
        {loading ? <h4 className="poke-details">Loading...</h4> : ""}
        {!pokemon ? (
          <h1 className="no-pokemon">You haven't caught any pokemon yet... Go catch them all!</h1>
				) : (
						<>
							<div>
								<h1 className='poke-details' id="poke-name">{pokemon.name}</h1>
								<h2 className='poke-details' id="poke-type">{pokemon.type}</h2>
                
							</div>
							{/* <div className="img-header">
								<h3>Normal</h3>
								<h3>Shiny</h3>
							</div> */}
							<div className="poke-img">
								<img src={pokemon.image} alt={pokemon.name} className='pokemon-img' />
								{/* <img src={pokemon.image.front_shiny} alt={pokemon.name} className='pokemon-img' /> */}
              </div>
              <div className="poke-details">
                <button className="search-btn">View Details</button>
              </div>
						</>
        )}
      </div>
    </>
  );
};

export default PokemonStats;
