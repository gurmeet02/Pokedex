import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import BackIcon from "../assets/back_icon.svg";

const PokemonSection = ({ pokemon }) => {
  const colours = {
    normal: "#B7B7A8",
    fire: "#FF6043",
    water: "#51A8FF",
    electric: "#FFD451",
    grass: "#8BD46E",
    ice: "#7DD4FF",
    fighting: "#BB5544",
    poison: "#B76EA8",
    ground: "#DDBB55",
    flying: "#8899FF",
    psychic: "#FF5599",
    bug: "#AABB22",
    rock: "#C5B77D",
    ghost: "#6666BB",
    dragon: "#7766EE",
    dark: "#8B6E60",
    steel: "#AAAABB",
    fairy: "#F1A8F1",
  };

  const color = pokemon.types ? pokemon.types[0].type.name : null;
  const themeColor = colours[color];

  return (
    <Container
      sx={{
        bgcolor: `${themeColor}`,
      }}
      maxWidth="xl"
    >
      <Link to="/">
        <img src={BackIcon} alt="Back to Home" style={{ width: "2rem" }} />
      </Link>
      <Container
        maxWidth={"sm"}
        style={{ boxShadow: "0 0 12px -4px" }}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "white",
        }}
      >
        <Typography variant="h4" fontWeight={600} letterSpacing={"1.25px"}>
          {pokemon.name
            ? pokemon.name.slice(0, 1).toUpperCase() + pokemon.name.slice(1)
            : null}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: `${pokemon.types ? pokemon.types.length === 1 ? 'center' : 'space-between' : null}`,
            width: "56%",
            paddingY: "1.5rem",
            alignItems: 'center'
          }}
        >
          {pokemon.types
            ? pokemon.types.map((type, index) => {
                return (
                  <Typography
                    key={index}
                    variant="span"
                    fontWeight={600}
                    letterSpacing={"1.05px"}
                    bgcolor={themeColor}
                    paddingY={'2px'}
                    paddingX={'12px'}
                    borderRadius={'1rem'}
                    color={'white'}
                  >
                    {type.type.name.slice(0, 1).toUpperCase() + type.type.name.slice(1)}
                  </Typography>
                );
              })
            : null}
        </Box>
      </Container>
    </Container>
  );
};

export default PokemonSection;
