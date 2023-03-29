import { useState, useEffect } from "react";
import Axios from "axios";
import { GeneratePokemon } from "../index";
import "./pokemonInfo.css";

const PokemonStats = () => {
  const [chosenPokemon, setChosenPokemon] = useState({id:1});
  const [pokemon, setPokemon] = useState({
    // id: 1,
    // name: "",
    // type: ["grass", "poison"],
    // height: 7,
    // weight: 69,
    // image: "",
    // stats: [],
  });
  const [loading, setLoading] = useState(false);
  
  const searchPokemon = async () => {
    try {
      setLoading(true);
      const response = await Axios.get(
        `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 983) + 1}/`
      );
      setPokemon({
        id: response.data.id,
        name: response.data.name,
        type: response.data.types.map((type) => type.type.name.split(" ")).join(", "),
        height: response.data.height,
        weight: response.data.weight,
        image: response.data.sprites.other["official-artwork"].front_default,
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
  
  useEffect(() => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${chosenPokemon.id}`)
    .then((res) => {
      setPokemon({
        id:res.data.id,
        name: res.data.name,
        type: res.data.types.map(type => type.type.name.split(' ')).join(', '),
        height: res.data.height,
        weight: res.data.weight,
        image: res.data.sprites.other["official-artwork"].front_default,
        stats: res.data.stats,
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);
  console.log(pokemon);

  

  return (
    <>
      <div className='pokemon-search'>
        <GeneratePokemon onClick={searchPokemon} />
      </div>
      <div className='pokemon-info'>
        {loading ? <h4 className="poke-details">Loading...</h4> : ""}
        {!chosenPokemon ? (
          <h1>You haven't caught any pokemon yet... Go catch them all!</h1>
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
