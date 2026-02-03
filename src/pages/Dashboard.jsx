import { Grid, Card, CardContent, Typography, Box, Chip, Avatar } from "@mui/material";
import { stats } from "../data/stats";

export default function Dashboard() {
  return (
    <>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {stats.map((s, i) => (
          <Grid item xs={6} sm={3} key={i}>
            <Card sx={{ textAlign: "center" }}>
              <CardContent>
                <Typography variant="body2" color="text.secondary">{s.title}</Typography>
                <Typography variant="h5" fontWeight={700}>{s.value}</Typography>
                <Chip label={s.change} size="small" sx={{ mt: 1 }} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6" mb={2}>Revenue</Typography>
              <Box sx={{ height: 160, bgcolor: "grey.100", borderRadius: 2 }}>Chart</Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6" mb={2}>Activity</Typography>
              {["Nitin V.", "Neha Y.", "Anub S."].map((u, i) => (
                <Box key={i} sx={{ display: "flex", justifyContent: "center", gap: 2, py: 1 }}>
                  <Avatar>{u[0]}</Avatar>
                  <Typography>{u}</Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
