import React from "react";
import {
  Box,
  Link,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  Rating,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const PlaceDetails = ({ place }) => {
  console.log("place", place);
  const validPlace = place?.name ?? false;
  return (
    validPlace && (
      <Card elevation={6} sx={{ maxWidth: "80%" }}>
        <CardMedia
          sx={{ height: "20rem" }}
          image={
            place?.photo
              ? place.photo.images.large.url
              : "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          title={place?.name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold" }}
          >
            {place?.name}
          </Typography>
          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="subtitle1">Price</Typography>
              <Typography variant="subtitle1">{place?.price_level}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="subtitle1">Ranking</Typography>
              <Typography variant="subtitle1">{place?.ranking}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              {place?.cuisine?.length > 0 && (
                <Typography variant="subtitle1">
                  {`${place.cuisine[0]?.name}`}
                </Typography>
              )}
              {place?.website && <Link href={place.website}>Website</Link>}
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
              {place?.cuisine?.map((item) => (
                <Chip key={item.name} size="small" label={item.name} />
              ))}
            </Box>
            {place?.address && (
              <Typography variant="subtitle2" sx={{ display: "flex" }}>
                <LocationOnIcon />
                {place.address}
              </Typography>
            )}
            {place?.phone && (
              <Typography
                gutterBottom
                variant="subtitle2"
                sx={{ display: "flex", rowGap: "1rem" }}
              >
                <PhoneIcon />
                {place.phone}
              </Typography>
            )}
          </Box>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => window.open(place?.web_url, "_blank")}
          >
            Trip Advisor
          </Button>
          <Button
            size="small"
            onClick={() => window.open(place?.website, "_blank")}
          >
            Website
          </Button>
        </CardActions>
      </Card>
    )
  );
};

export default PlaceDetails;
