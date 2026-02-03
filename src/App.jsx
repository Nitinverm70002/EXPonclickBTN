import { useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import getTheme from "./theme/theme";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import Footer from "./layout/Footer";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Settings from "./pages/Settings";

export default function App() {
  const [mode, setMode] = useState("light");
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState("dashboard");

  const theme = getTheme(mode);
  const toggleTheme = () =>
    setMode((m) => (m === "light" ? "dark" : "light"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* ROOT LAYOUT */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          bgcolor: "background.default",
        }}
      >
        {/* NAVBAR */}
        <Navbar
          section={section}
          mode={mode}
          toggleTheme={toggleTheme}
          openSidebar={() => setOpen(true)}
        />

        {/* SIDEBAR */}
        <Sidebar
          open={open}
          close={() => setOpen(false)}
          section={section}
          setSection={setSection}
        />

        {/* MAIN CONTENT */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,      // ⭐ pushes footer to bottom
            mt: 10,           // space for AppBar
            px: 3,
          }}
        >
          <Box sx={{ maxWidth: 1100, mx: "auto" }}>
            {section === "dashboard" && <Dashboard />}
            {section === "users" && <Users />}
            {section === "settings" && (
              <Settings mode={mode} toggleTheme={toggleTheme} />
            )}
          </Box>
        </Box>

        {/* FOOTER */}
        <Footer mode={mode} />
      </Box>
    </ThemeProvider>
  );
}
