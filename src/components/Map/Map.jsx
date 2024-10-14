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

const Map = ({ setCoordinates, setBounds, bounds, coordinates, places }) => {
  const theme = useTheme();
  // static data for testing only
  const myPlaces = [
    {
      location_id: "911418",
      name: "Bubba Gump Shrimp Co.",
      latitude: "34.136074",
      longitude: "-118.35336",
      num_reviews: "1599",
    },
    {
      location_id: "4504016",
      name: "El Compadre",
      latitude: "34.075172",
      longitude: "-118.25314",
      num_reviews: "350",
    },

    {
      location_id: "13742873",
      name: "Angelini Alimentari",
      latitude: "34.076195",
      longitude: "-118.34929",
      num_reviews: "535",
    },
  ];
  console.log("Coordinates passed to Map component:", coordinates);
  console.log("Places passed to Map component:", places);

  const throttle = (func, delay) => {
    let timeOutId = null;
    return (...args) => {
      if (!timeOutId) {
        func(...args);
      }
      timeOutId = setTimeout(() => {
        timeOutId = null;
      }, delay);
    };
  };
  const handleCoordinatesChange = throttle((e) => {
    const newCoordinates = { lat: e.center.lat, lng: e.center.lng };
    const newBounds = { ne: e.marginBounds.ne, sw: e.marginBounds.sw };

    // Log the new coordinates and bounds
    console.log("New coordinates:", newCoordinates);
    console.log("New bounds:", newBounds);
    // Only update if the values have changed
    if (
      newCoordinates.lat !== coordinates.lat ||
      newCoordinates.lng !== coordinates.lng
    ) {
      setCoordinates(newCoordinates);
    }

    if (newBounds.ne !== bounds.ne || newBounds.sw !== bounds.sw) {
      setBounds(newBounds);
    }
  }, 100);
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={handleCoordinatesChange}
        onChildClick={""}
      >
        {places.length > 0 &&
          places.map((place) => {
            console.log("Rendering place inside Map:", place);
            return (
              <div
                id="paper-card"
                lat={Number(place?.latitude)}
                lng={Number(place?.longitude)}
                key={place?.location_id}
                style={{
                  position: "absolute",
                  width: 40,
                  height: 40,
                  left: -40 / 2,
                  top: -40 / 2,

                  border: "5px solid #f44336",
                  borderRadius: 40,
                  backgroundColor: "white",
                  textAlign: "center",
                  color: "#3f51b5",
                  fontSize: 16,
                  fontWeight: "bold",
                  padding: 4,
                  zIndex: 1000000000,
                }}
              >
                <div>Pin</div>
              </div>
            );
          })}
        {myPlaces.map((place) => {
          <div
            id="paper-card"
            lat={Number(place?.latitude)}
            lng={Number(place?.longitude)}
            key={place?.location_id}
            style={{
              position: "absolute",
              width: 40,
              height: 40,
              left: -40 / 2,
              top: -40 / 2,

              border: "5px solid #f44336",
              borderRadius: 40,
              backgroundColor: "white",
              textAlign: "center",
              color: "#3f51b5",
              fontSize: 16,
              fontWeight: "bold",
              padding: 4,
              zIndex: 1000000000,
            }}
          >
            PIN with static Data
          </div>;
        })}
        <div
          lat={34.136074}
          lng={-118.35336}
          style={{
            position: "absolute",
            width: 40,
            height: 40,
            left: -40 / 2,
            top: -40 / 2,

            border: "5px solid #f44336",
            borderRadius: 40,
            backgroundColor: "white",
            textAlign: "center",
            color: "#3f51b5",
            fontSize: 16,
            fontWeight: "bold",
            padding: 4,
            zIndex: 1000000000,
          }}
        >
          <div>One PIN</div>
        </div>
      </GoogleMapReact>
    </div>
  );
};

export default Map;
