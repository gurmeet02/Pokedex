import React, { useEffect, useState } from "react";
import { Grid, Container, Box } from "@mui/material";
import PokeCard from "./PokeCard";
import CircularProgress from "@mui/material/CircularProgress";

const PokeSection = ({ filteredPokemons, searchItem }) => {
  const [pokeData, setPokeData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=1021`)
      .then((resp) => resp.json())
      .then((data) => setPokeData(data.results), setIsLoaded(true));
  }, [isLoaded]);
  const [pokeId, setPokeId] = useState([]);

  return (
    <Container>
      {pokeData.length !== 0 ? (
        <Grid container spacing={4}>
          {searchItem === ""
            ? pokeData.map((pokemon, index) => {
                return (
                  <Grid item xs={3} key={index}>
                    <PokeCard
                      pokeName={pokemon.name}
                      pokeImg={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                        index + 1
                      }.png`}
                      id={index + 1}
                    />
                  </Grid>
                );
              })
            : filteredPokemons.map((pokemon, index) => {
                return (
                  <Grid item xs={3} key={index}>
                    <PokeCard
                      pokeName={pokemon.name}
                      pokeImg={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url
                        .slice(34, 38)
                        .replace("/", "")}.png`}
                      id={pokemon.url.slice(34, 38).replace("/", "")}
                    />
                  </Grid>
                );
              })}
        </Grid>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "75vh",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Container>
  );
};

export default PokeSection;
