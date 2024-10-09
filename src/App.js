import React, { useState, useEffect } from "react";

import { Grid2, Box } from "@mui/material";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

import { getPlacesData } from "./api";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    (async () => {
      const data = await getPlacesData(bounds.sw, bounds.ne);
      setPlaces(data);
    })();
  }, [coordinates, bounds]);
  // console.log("bounds", bounds);
  // console.log("places", places);
  return (
    <Box sx={{ padding: "0 0 1rem 1.5rem" }}>
      <Header />
      <Grid2 container spacing={3} sx={{ width: "100%", height: "100vh" }}>
        <Grid2 size={{ xs: 12, md: 3 }} sx={{ pt: "5rem", height: "99%" }}>
          <List places={places} />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 9 }} sx={{ pt: "5rem", height: "99%" }}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default App;
