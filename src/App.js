import React, { useState, useEffect } from "react";

import { Grid2, Box, CircularProgress } from "@mui/material";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

import { getPlacesData } from "./api";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    if (bounds?.sw && bounds?.ne) {
      const fetchPlaces = async () => {
        setLoading(true);
        setError(null);
        const { data, error } = await getPlacesData(bounds.sw, bounds.ne);
        if (error) {
          setError(error);
          setPlaces([]);
        } else {
          setPlaces(data);
        }

        setLoading(false);
      };
      fetchPlaces();
    }
  }, [bounds]);
  // console.log("bounds", bounds);
  // console.log("places", places);
  return (
    <Box sx={{ padding: "0 0 1rem 1.5rem" }}>
      <Header />
      <Grid2 container spacing={3} sx={{ width: "100%", height: "100vh" }}>
        <Grid2 size={{ xs: 12, md: 3 }} sx={{ pt: "5rem", height: "99%" }}>
          <List places={places} error={error} loading={loading} />
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
