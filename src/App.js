import React from "react";

import { Grid2, Box } from "@mui/material";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

const App = () => {
  return (
    <Box sx={{ padding: "0 0.5rem 0.5rem 1.5rem" }}>
      <Header />
      <Grid2 container spacing={3} sx={{ width: "100%" }}>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ pt: "5rem" }}>
          <List />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 8 }} sx={{ pt: "5rem" }}>
          <Map />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default App;
