import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { UpworkIcon } from "./shared";
import { Container } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

// Footer Component
export default function Footer() {
  const socials = {
    linkedin: "https://www.linkedin.com/in/davidkov111/",
    github: "https://github.com/davidkakov111",
    upwork: "https://www.upwork.com/freelancers/~01b1e7ca6298d8da33",
  };
  const sourceCodeUrl = "https://github.com/davidkakov111/portfolio";

  return (
    <Container maxWidth="lg" disableGutters>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ mt: 4, py: 2 }}
      >
        <Toolbar
          sx={{
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          {/* Social Icons */}
          <Stack direction="row" spacing={2}>
            <IconButton
              component="a"
              href={socials.linkedin}
              target="_blank"
              rel="noopener"
              sx={{
                transition: "all 0.3s ease",
                "&:hover": { transform: "scale(1.2)", color: "primary.main" },
              }}
            >
              <LinkedInIcon fontSize="medium" />
            </IconButton>

            <IconButton
              component="a"
              href={socials.github}
              target="_blank"
              rel="noopener"
              sx={{
                transition: "all 0.3s ease",
                "&:hover": { transform: "scale(1.2)", color: "primary.main" },
              }}
            >
              <GitHubIcon fontSize="medium" />
            </IconButton>

            <IconButton
              component="a"
              href={socials.upwork}
              target="_blank"
              rel="noopener"
              sx={{ 
                transition: "all 0.3s ease",
                "&:hover": { transform: "scale(1.2)", color: "primary.main" },
                color: "default.main"
              }}
            >
              <UpworkIcon />
            </IconButton>
          </Stack>

          {/* Copyright */}
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} All rights reserved.
          </Typography>

          {/* Source code */}
          <Typography variant="body2" align="left" sx={{ mt: 0.5 }}>
            <a
              href={sourceCodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", display: "flex", alignItems: "center", gap: 4, textDecoration: "underline" }}
            >
              View Source Code <OpenInNewIcon sx={{ fontSize: 16 }} />
            </a>
          </Typography>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
