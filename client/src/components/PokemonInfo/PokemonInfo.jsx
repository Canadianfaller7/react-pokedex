import {useState, useEffect} from "react";
import Axios from "axios";
import {GeneratePokemon} from "../index";
import "./pokemonInfo.css";

const PokemonStats = () => {
  // setting the state to a blank object
  const [pokemon, setPokemon] = useState({});
  // set loading state to false since we aren't loading anything yet
  const [loading, setLoading] = useState(false);

  // use effect to run the searchPokemon function when the component mounts
  useEffect(() => {
    searchPokemon(pokemon);
  }, []);
  // function to make api call to get information about pokemon
  const searchPokemon = async (pokemon) => {
    try {
      // setting loading state to true
      setLoading(true);

      // fetching random pokemon id
      pokemon = await Axios.get(
        `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 983) + 1}/`
      );
      // setting pokemon state to the random id and getting values from api response
      setPokemon((currentPokemon) => {
        return {
          id: (currentPokemon.id = pokemon.data.id),
          name: (currentPokemon.name = pokemon.data.name),
          type: (currentPokemon.type = pokemon.data.types
            .map((type) => type.type.name.split(" "))
            .join(", ")),
          height: (currentPokemon.height = pokemon.data.height),
          weight: (currentPokemon.weight = pokemon.data.weight),
          image: (currentPokemon.image =
            pokemon.data.sprites.other["official-artwork"].front_default),
          // stats: currentPokemon.stats = pokemon.data.stats
          stats: (currentPokemon.stats = pokemon.data.stats.map(
            (stat) => `${stat.stat.name} ${stat.base_stat}`
          )),
        };
      });
      // set loading to false again now we have our data
      setLoading(false);
      // catch and console log any errors
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='pokemon-search'>
        <GeneratePokemon onClick={() => searchPokemon(pokemon)} />
      </div>
      <div className='pokemon-info'>
        {loading ? <h4 className='poke-details'>Loading...</h4> : ""}
        {!pokemon ? (
          <h1 className='no-pokemon'>You haven't caught any pokemon yet... Go catch them all!</h1>
        ) : (
          <>
            <div>
              <h1 className='poke-details' id='poke-name'>
                {pokemon.name}
              </h1>
              <h2 className='poke-details' id='poke-type'>
                {pokemon.type}
              </h2>
            </div>
            {/* <div className="img-header">
								<h3>Normal</h3>
								<h3>Shiny</h3>
							</div> */}
            <div className='poke-img'>
              <img src={pokemon.image} alt={pokemon.name} className='pokemon-img' />
              {/* <img src={pokemon.image.front_shiny} alt={pokemon.name} className='pokemon-img' /> */}
            </div>
            {/* <div> */}
            {/* </div> */}
          </>
        )}
      </div>
            <button className='search-btn viewBtn'>View Details</button>
    </>
  );
};

export default PokemonStats;
