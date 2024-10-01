import React from "react";
import ReactDom from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./Theme/Theme";
import App from "./App";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
