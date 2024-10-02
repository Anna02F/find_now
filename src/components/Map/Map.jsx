import React from "react";
import GoogleMapReact from "google-map-react";
import {
  useTheme,
  Paper,
  Typography,
  useMediaQuery,
  Rating,
  Box,
} from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

const Map = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));
  const coordinates = { lat: 0, lng: 0 };
  return (
    <Box sx={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={11}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </Box>
  );
};

export default Map;
