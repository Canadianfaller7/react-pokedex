import {useState} from "react";
import Axios from "axios";
import { GeneratePokemon } from "../index";
import "./pokemonInfo.css";

const PokemonStats = () => {
  const [pokemonId, setPokemonId] = useState("");
  const [chosenPokemon, setChosenPokemon] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    type: "",
    height: "",
    weight: "",
    image: "",
    stats: "",
  });
  const [loading, setLoading] = useState(false);

  const searchPokemon = async () => {
    try {
      setLoading(true);
      const response = await Axios.get(
        `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random(pokemonId) * 983) + 1}/`
      );
      setPokemon({
        name: response.data.name,
        type: response.data.types[0].type.name,
        height: response.data.height,
        weight: response.data.weight,
        image: response.data.sprites.other["official-artwork"],
        stats: response.data.stats,
      });
      setChosenPokemon(true);
      console.log(response.data);
      setLoading(false);
      // setPokemonId(response.data.name)
      // return pokemonData
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='pokemon-title'>
        <GeneratePokemon onClick={searchPokemon} onChange={(e) => setPokemonId(e.target.value)} />
      </div>
      <div className='pokemon-info'>
        {loading ? <h4 className="poke-details">Loading...</h4> : ""}
        {!chosenPokemon ? (
          <h1>You haven't caught any pokemon yet... Go catch them all!</h1>
				) : (
						<>
							<div>
								<h1 className='poke-details' id="poke-name">{pokemon.name}</h1>
								{/* <h2 className='poke-details'>{pokemon.type}</h2> */}
							</div>
							{/* <div className="img-header">
								<h3>Normal</h3>
								<h3>Shiny</h3>
							</div> */}
							<div className="poke-img">
								<img src={pokemon.image.front_default} alt={pokemon.name} className='pokemon-img' />
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
