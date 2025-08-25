import { Box, Container, Typography } from "@mui/material";

// About section component
export default function About() {
    return (
        <Box
            id="about"
            component="section"
            sx={{
                py: { xs: 6, md: 10 }, // padding top & bottom
                textAlign: "center",
                backgroundColor: "transparent", // keep same flow as other sections
            }}
        >
            <Container maxWidth="md">
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                        mb: 2,
                    }}
                >
                    About Me
                </Typography>
        
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: { xs: "1rem", md: "1.25rem" },
                        lineHeight: 1.6,
                        color: "text.secondary",
                    }}
                >
                    I’m David Kovacs — a Full-Stack Developer specialized in the TypeScript and JavaScript
                    ecosystem (React, Node.js, Next.js, Angular). I build fast, scalable 
                    and maintainable applications that reduce manual work and boost efficiency. 
                    I’ve worked on modern web apps, automated workflows, and even Web3 projects, 
                    always focusing on delivering solutions that directly support business goals.
                </Typography>
            </Container>
        </Box>
    );
}
