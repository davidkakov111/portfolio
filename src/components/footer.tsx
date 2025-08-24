import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} David. All rights reserved.
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
