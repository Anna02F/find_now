import { createTheme, responsiveFontSizes } from "@mui/material";
import { green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      light: "#4FB3BF",
      main: "#007B83",
      dark: "#005F66",
      contrastText: "#fff",
    },
    secondary: {
      light: "#FFDD57",
      main: "#F9A825",
      dark: "#C68400",
      contrastText: "#000",
    },
    success: {
      main: "#4caf50",
    },
    warning: {
      main: "#e65100",
    },
    accent: {
      main: "#FF7043",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FAFAFA",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
  },
});

export default responsiveFontSizes(theme);
