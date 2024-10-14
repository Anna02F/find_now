import React from "react";
import {
  Box,
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
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const PlaceDetails = ({ place }) => {
  const validPlace = place?.name ?? false;
  return (
    validPlace && (
      <Card elevation={6}>
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
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            {place?.name}
          </Typography>

          {/* Rating and Price Level */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Rating value={Number(place?.rating)} readOnly />
            <Typography variant="subtitle1" color="textSecondary">
              {place?.price_level}
            </Typography>
          </Box>

          {/* Ranking */}
          <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
            {place?.ranking}
          </Typography>

          {/* Cuisine Chips */}
          {place?.cuisine?.length > 0 && (
            <Box
              sx={{ display: "flex", flexWrap: "wrap", gap: ".5rem", mb: 2 }}
            >
              {place?.cuisine?.map((item) => (
                <Chip key={item.name} size="small" label={item.name} />
              ))}
            </Box>
          )}

          {/* Address */}
          {place?.address && (
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <LocationOnIcon color="action" sx={{ mr: 1 }} />
              <Typography variant="body2" color="textSecondary">
                {place.address}
              </Typography>
            </Box>
          )}

          {/* Phone */}
          {place?.phone && (
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <PhoneIcon color="action" sx={{ mr: 1 }} />
              <Typography variant="body2" color="textSecondary">
                {place.phone}
              </Typography>
            </Box>
          )}

          {/* Open Now Status */}
          {place?.open_now_text && (
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <AccessTimeIcon color="action" sx={{ mr: 1 }} />
              <Typography
                variant="body2"
                sx={{
                  color: place.is_closed ? "error.main" : "success.main",
                }}
              >
                {place.open_now_text}
              </Typography>
            </Box>
          )}
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
