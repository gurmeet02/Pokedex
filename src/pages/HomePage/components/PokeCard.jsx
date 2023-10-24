import React, { useEffect, useState } from "react";
import { Typography, Paper, Box } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PokeCard = ({ pokeName, pokeImg, id }) => {

  return (
    <Link to={`/pokemon/${id}`} style={{ textDecoration: "none" }}>
      <Paper
        elevation={2}
        sx={{
          padding: "12px",
          textAlign: "center",
          cursor: "pointer",
          borderRadius: "0.5rem",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
        component={motion.div}
        whileHover={{
          scale: 1.015,
        }}
      >
        <img src={pokeImg} style={{ width: "8rem" }} />
        <Typography
          variant={"span"}
          fontWeight={600}
          sx={{
            width: "fit-content",
            padding: "2px 12px",
            borderRadius: "1rem",
            fontSize: "1.1rem",
          }}
        >
          {id ? id +
            "." +
            " " +
            pokeName.slice(0, 1).toUpperCase() +
            pokeName.slice(1) : pokeName.slice(0, 1).toUpperCase() +
            pokeName.slice(1)}
        </Typography>
      </Paper>
    </Link>
  );
};

export default PokeCard;
