import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  useTheme,
} from "@mui/material";
import Search from "@mui/icons-material/Search";

const Header = () => {
  const theme = useTheme();
  return (
    <AppBar sx={{ background: theme.palette.primary.light }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h5"
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          Find Now
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end", flexGrow: 1 }}>
          <Typography variant="body1" sx={{ paddingRight: theme.spacing(2) }}>
            Find. Go. Enjoy.
          </Typography>
        </Box>
        {/* <Autocomplete> */}
        <div
          style={{
            display: "flex",
            backgroundColor: "#FFFFFF",
            borderRadius: "5px",
            justifyContent: "space-between",
            alignItems: "center",
            columnGap: "0.5rem",
            padding: theme.spacing(0.5, 1),
            maxWidth: "300px",
            width: "100%",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            width: "100%",
          }}
        >
          <div>
            <Search sx={{ color: "text.primary" }} />
          </div>
          <InputBase
            placeholder="Search..."
            sx={{
              flexGrow: 1,
              color: "text.primary",
              borderRadius: "5px",
            }}
          />
        </div>
        {/* </Autocomplete> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
