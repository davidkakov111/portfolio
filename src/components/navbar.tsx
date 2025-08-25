import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useColorScheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Avatar, Box, IconButton, Slide } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useRef, useState } from "react";

const sections = [
  { label: "About", id: "about", block: "start" },
  { label: "Experience", id: "experience", block: "start" },
  { label: "Projects", id: "projects", block: "start" },
  { label: "Contact", id: "contact", block: "start" },
] as const;

// Top navigation bar component
export default function Navbar() {
    const [visible, setVisible] = useState(true);
    const prevScroll = useRef(0);
    const largeWidth = useMediaQuery("(min-width:600px)");
    
    // Scroll to section by id
    const scrollTo = (id: string, block: "start" | "end") => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block });
    };

    // Handle scroll to show/hide navbar
    const handleScroll = () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll < prevScroll.current || currentScroll < 100) {
            // scrolling up or near top
            setVisible(true);
        } else {
            // scrolling down
            setVisible(false);
        }
        prevScroll.current = currentScroll;
    };

    // Attach scroll listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Color scheme for theme toggle
    const { mode, setMode } = useColorScheme();
    if (!mode) {
        return null;
    }

    return (
        <Slide in={visible} direction="down">
            <AppBar position="sticky" color="default" elevation={1}>
                <Container maxWidth="lg" disableGutters>
                    <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
                        {/* Logo */}
                        <Box 
                            onClick={() => scrollTo('name', 'end')} 
                            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                        >
                            <Avatar src="/avatar.png" alt="Logo" sx={{ width: 40, height: 40, mx: 1 }} />
                            {largeWidth && (
                                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                    Portfolio
                                </Typography>
                            )}
                        </Box>

                        <div>
                            {/* Nav Buttons */} {/* TODO - Make them responsive */}
                            {sections.map((s) => (
                                <Button
                                    key={s.id}
                                    color="inherit"
                                    onClick={() => scrollTo(s.id, s.block)}
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
        </Slide>
    );
}
