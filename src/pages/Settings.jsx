import { Card, CardContent, Typography, Box, Switch, Divider } from "@mui/material";

export default function Settings({ mode, toggleTheme }) {
  return (
    <Card>
      <CardContent sx={{ maxWidth: 350, mx: "auto", textAlign: "center" }}>
        <Typography variant="h6" mb={3}>Settings</Typography>

        <Typography fontWeight={600}>Theme</Typography>
        <Box display="flex" justifyContent="center" gap={2} mb={2}>
          <Typography>{mode === "light" ? "☀️ Light" : "🌙 Dark"}</Typography>
          <Switch checked={mode === "dark"} onChange={toggleTheme} />
        </Box>

        <Divider />

        <Typography mt={2} fontWeight={600}>Notifications</Typography>
        <label><input type="checkbox" defaultChecked /> Email</label><br />
        <label><input type="checkbox" defaultChecked /> Push</label><br />
        <label><input type="checkbox" /> SMS</label>
      </CardContent>
    </Card>
  );
}
