import { Card, CardContent, Grid, Box, Typography, Avatar, Chip, Button } from "@mui/material";
import { users } from "../data/users";

export default function Users() {
  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between" mb={3}>
          <Typography variant="h6">Users</Typography>
          <Button variant="contained" size="small">+ Add</Button>
        </Box>

        <Grid container spacing={2}>
          {users.map((u) => (
            <Grid item xs={12} sm={6} key={u.id}>
              <Box sx={{ p: 2, border: 1, borderRadius: 2, textAlign: "center" }}>
                <Avatar sx={{ mx: "auto", mb: 1 }}>{u.name[0]}</Avatar>
                <Typography fontWeight={500}>{u.name}</Typography>
                <Typography variant="caption">{u.email}</Typography>
                <Box mt={1} display="flex" gap={1} justifyContent="center">
                  <Chip label={u.role} size="small" />
                  <Chip label={u.status} size="small" />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
