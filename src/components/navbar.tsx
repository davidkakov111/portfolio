import { Avatar, Box, IconButton, Slide, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useColorScheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
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
    const [drawerOpen, setDrawerOpen] = useState(false);
    const prevScroll = useRef(0);
    const largeWidth = useMediaQuery("(min-width:600px)");
    
    // Scroll to section by id
    const scrollTo = (id: string, block: "start" | "end") => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block });

        if (!el) alert(`Element with id ${id} not found`);
    
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
                        {/* Left section */}
                        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                            {/* On small screens, show menu icon */}
                            {!largeWidth && (
                                <IconButton onClick={() => setDrawerOpen(true)} sx={{ mr: 1 }}>
                                    <MenuIcon />
                                </IconButton>    
                            )}

                            {/* Logo */}
                            <Box 
                                onClick={() => scrollTo('name', 'end')} 
                                sx={{ display: "flex", alignItems: "center" }}
                            >
                                <Avatar src="/avatar.png" alt="Logo" sx={{ width: 40, height: 40, mx: 1 }} />
                                {largeWidth && (
                                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                        Portfolio
                                    </Typography>
                                )}
                            </Box>
                        </Box>
                        
                        {/* Right section */}
                        <Box>
                            {/* On large screens, show buttons directly */}
                            {largeWidth && (
                                sections.map((s) => (
                                    <Button
                                        key={s.id}
                                        color="inherit"
                                        onClick={() => scrollTo(s.id, s.block)}
                                        sx={{ ml: 2 }}
                                    >
                                        {s.label}
                                    </Button>
                                ))
                            )}
                            
                            {/* Theme toggle */}
                            <IconButton onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                                {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>

                {/* Drawer for mobile */}
                <Drawer
                    anchor="left"
                    open={drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                >
                    <Box sx={{ width: 250, display: "flex", flexDirection: "column", height: "100%" }}>
                        {/* Close button */}
                        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
                            <IconButton onClick={() => setDrawerOpen(false)}>
                                <CloseIcon />
                            </IconButton>
                        </Box>

                        {/* Nav items */}
                        <List sx={{ width: 200 }}>
                            {sections.map((s) => (
                                <ListItem key={s.id} disablePadding>
                                    <ListItemButton onClick={() => {
                                        scrollTo(s.id, s.block); 
                                        setDrawerOpen(false);
                                    }}>
                                        <ListItemText primary={s.label} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </AppBar>
        </Slide>
    );
}
