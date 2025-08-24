import { Box, useMediaQuery } from "@mui/material";
import Object3D from "../components/3d";

// Home page component
export default function HomePage() {
    const largeWidth = useMediaQuery("(min-width:600px)");

    return (<>
        <Box
            sx={{
                height: largeWidth ? "95vh" : "60vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center"
            }}
        >
            {/* Name */}
            <Box 
                id="name"
                component="p" 
                sx={{ 
                    fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                    fontWeight: "bold", 
                    fontFamily: "'Roboto', sans-serif", 
                    m: 0,
                    pt: 2
                }}
            >
                David Kovacs
            </Box>

            {/* Headline / Role */}
            <Box
                component="p"
                sx={{
                    fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
                    fontWeight: 500,
                    fontFamily: "'Roboto', sans-serif",
                    color: "text.secondary",
                    m: 0,
                    pt: 1,
                }}
            >
                Full-Stack Developer | TypeScript · Node.js · React · Angular · Next.js
            </Box>

            {/* 3D object */}
            <Object3D largeWidth={largeWidth} />
        </Box>
    </>);
}
