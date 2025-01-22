import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";

const defaultTheme = createTheme();

const theme = createTheme({
  palette: {
    ...defaultTheme.palette,
    mode: "light",
    primary: {
      main: "#705d00",
    },
    secondary: {
      main: "#6e5d1c",
    },
    background: {
      paper: "#ffffff",
    },
    error: {
      main: "#ba1a1a",
    },
  },
  typography: {
    fontFamily: "Space Grotesk",
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
