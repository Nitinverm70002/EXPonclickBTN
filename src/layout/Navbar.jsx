import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";

export default function Navbar({ section, toggleTheme, mode, openSidebar }) {
  return (
    <AppBar position="fixed" sx={{ bgcolor: mode === "dark" ? "#3e7d9d" : "#fff", color: "text.primary" }}>
      <Toolbar>
        <IconButton onClick={openSidebar}>☰</IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600, ml: 2 }}>
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </Typography>

        <IconButton onClick={toggleTheme}>
          {mode === "light" ? "🌙" : "☀️"}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
