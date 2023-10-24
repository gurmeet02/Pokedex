import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import TopSection from "./components/TopSection";
import PokeSection from "./components/PokeSection";

const HomePage = () => {
  const [searchPokemons, setSearchPokemons] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=1021`)
      .then((resp) => resp.json())
      .then((data) => setSearchPokemons(data.results), setIsLoaded(true));
  }, [isLoaded]);

  const [searchItem, setSearchItem] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState(searchPokemons);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
    const filteredItems = searchPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    setFilteredPokemons(filteredItems);
  };

  return (
    <Container>
      <TopSection
        handleInputChange={handleInputChange}
        searchItem={searchItem}
      />
      <PokeSection searchItem={searchItem} filteredPokemons={filteredPokemons} />
    </Container>
  );
};

export default HomePage;
