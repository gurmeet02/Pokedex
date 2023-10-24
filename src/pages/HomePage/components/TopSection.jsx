import React from "react";
import {
  Typography,
  Container,
  Input,
  InputAdornment,
  FormControl,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const TopHeading = ({handleInputChange, searchItem}) => {

  return (
    <Container
      sx={{
        py: "2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" fontWeight={600} letterSpacing={"1.75px"}>
        Pokedex
      </Typography>

      <FormControl variant="standard" sx={{ width: "25%" }}>
        <Input
          placeholder="Search..."
          value={searchItem}
          onChange={handleInputChange}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    </Container>
  );
};

export default TopHeading;
