import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useColorScheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { IconButton } from "@mui/material";

const sections = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

// Top navigation bar component
export default function Navbar() {
    // Color scheme for theme toggle
    const { mode, setMode } = useColorScheme();
    if (!mode) {
        return null;
    }
    
    // Scroll to section by id
    const handleScroll = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <AppBar position="sticky" color="default" elevation={1}>
            <Container maxWidth="lg" disableGutters>
                <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
                    {/* Logo */}
                    <Typography variant="h6" sx={{ fontWeight: "bold", cursor: "pointer" }}>
                        MyPortfolio
                    </Typography>

                    <div>
                        {/* Nav Buttons */}
                        {sections.map((s) => (
                            <Button
                                key={s.id}
                                color="inherit"
                                onClick={() => handleScroll(s.id)}
                                sx={{ ml: 2 }}
                            >
                                {s.label}
                            </Button>
                        ))}

                        {/* Theme toggle */}
                        <IconButton onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
                            {mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
                        </IconButton>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
