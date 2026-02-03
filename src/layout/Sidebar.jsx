import { Drawer, Box, Toolbar, Typography, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const drawerWidth = 220;

export default function Sidebar({ open, close, section, setSection }) {
  return (
    <Drawer open={open} onClose={close}>
      <Box sx={{ width: drawerWidth }}>
        <Toolbar>
          <Typography variant="h6" fontWeight={700}>Admin</Typography>
        </Toolbar>

        <Divider />

        <List>
          {["dashboard", "users", "settings"].map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton
                selected={section === item}
                onClick={() => {
                  setSection(item);
                  close();
                }}
              >
                <ListItemText primary={item.charAt(0).toUpperCase() + item.slice(1)} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
