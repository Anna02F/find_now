import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid2 } from "@mui/material";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid2 container spacing={3} sx={{ width: "100%" }}>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <List />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <Map />
        </Grid2>
      </Grid2>
    </>
  );
};

export default App;
