import React from "react";
import { Box, Typography } from "@mui/material";

const PlaceDetails = ({ place }) => {
  return (
    <Box>
      <Typography variant="h5" component="h2" sx={{ fontWeight: "bold" }}>
        {place.name}
      </Typography>
    </Box>
  );
};

export default PlaceDetails;
