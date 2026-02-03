import { createTheme } from "@mui/material/styles";

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: { main: "#1976d2" },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: { borderRadius: 12 },
        },
      },
    },
  });

export default getTheme;
