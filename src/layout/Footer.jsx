import { Box, Typography } from "@mui/material";

export default function Footer({ mode }) {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        py: 1.5,
        textAlign: "center",
        bgcolor: mode === "dark" ? "#3e7d9d" : "#1976d2",
        color: "#fff",
      }}
    >
      <Typography variant="body2">
        © 2026 project_material_UI • Built with MUI
      </Typography>
    </Box>
  );
}
