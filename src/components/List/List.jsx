import React, { useState } from "react";
import {
  Box,
  CircularProgress,
  Grid2,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = () => {
  const [category, setCategory] = useState("restaurants");
  const [rating, setRating] = useState(0);

  // To be Fetched from API
  const places = [
    {
      name: "place1",
    },
    {
      name: "place2",
    },
    {
      name: "place3",
    },
    {
      name: "place4",
    },
    {
      name: "place5",
    },
    {
      name: "place6",
    },
  ];
  return (
    <Box>
      <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
        Nearby Restaurants, Hotels and Attractions
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "15rem",
          justifyContent: "space-between",
          margin: "1.5rem 0",
        }}
      >
        <FormControl sx={{ maxwidth: "50%", minwidth: "fit-content" }}>
          <InputLabel id="category-select-label">Select Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={category}
            label="Select Category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="attractions">Attractions</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ maxWidth: "20%", minWidth: "6rem" }}>
          <InputLabel id="rating-select-label">Select Rating</InputLabel>
          <Select
            labelId="rating-select-label"
            id="rating-select"
            value={rating}
            label="Select Rating"
            onChange={(e) => setRating(e.target.value)}
          >
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={3}>Above 3.0</MenuItem>
            <MenuItem value={4}>Above 4.0</MenuItem>
            <MenuItem value={4.5}>Above 4.5</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid2 container>
        {places?.map((place, i) => (
          <Grid2 key={i} size={{ xs: 12 }} sx={{ margin: "1rem" }}>
            <PlaceDetails place={place} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default List;
