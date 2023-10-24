import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PokemonSection from "./components/PokemonSection";

const PokePage = () => {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((resp) => resp.json())
      .then(
        (data) => setPokemon(data),
        setIsLoaded(true),
        setPokemonTypes(pokemon.types)
      );
  }, [isLoaded]); 
  return (
    <section>
      <PokemonSection pokemon={pokemon} pokemonTypes={pokemonTypes} />
    </section>
  );
};

export default PokePage;
