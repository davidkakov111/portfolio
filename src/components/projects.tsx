import { Box, Card, CardContent, CardMedia, Typography, Chip } from "@mui/material";
import Grid from "@mui/material/Grid";

const projects = [
    {
        title: "ChainPortal",
        description: "A multi-chain NFT and token management platform that simplifies minting across blockchains with real-time transparency and a seamless user experience. Built with Angular, NestJS, PostgreSQL and Dockerized for scalability, it automates deployment via CI/CD, ensuring efficiency and security in Web3 asset creation.",
        image: "/chainportal.jpeg",
        tags: ["Node.js", "Angular", "PostgreSQL", "Web3"],
        link: "https://chainportal.app",
        code: "",
        learnMore: "https://chainportal.app/learn",
        isGame: false,
    },
    {
        title: "Solana Mystery Box shop",
        description: "In the ever-evolving landscape of cryptocurrencies, one project stands out as a game-changer in how we approach online payments The Solana Mystery Box Shop, has ushered in a new era in crypto transactions by harnessing the capabilities of the Web3.js and others, such as the Solana Python SDK.",
        image: "/solana.jpeg",
        tags: ["Next.js", "Django", "PostgreSQL", "Web3"],
        link: "https://solanamysterybox.vercel.app/",
        code: "https://github.com/davidkakov111/SolanaMysteryBoxShop",
        learnMore: "",
        isGame: false,
    },
    {
        title: "Movie Catalog",
        description: "Thrilled to present my Movie Catalog project! Built with TypeScript, it offers seamless browsing, personalized user accounts, and an intuitive admin panel. From detailed movie pages to comprehensive analytics, it demonstrates my commitment to leveraging cutting-edge technologies for user-centric applications.",
        image: "/movie.png",
        tags: ["Next.js", "PostgreSQL"],
        link: "https://mymoviecatalog.vercel.app/",
        code: "https://github.com/davidkakov111/MovieCatalog",
        learnMore: "",
        isGame: false,
    },
    {
        title: "Investment Analytics",
        description: "A full-stack platform for tracking investments, featuring a React + Tailwind frontend integrated with a Node.js and PostgreSQL backend. It delivers real-time profit and tax insights, transaction management, and secure account handling for Romanian investors with intuitive data visualizations.",
        image: "/investment.png",
        tags: ["React", "Node.js", "PostgreSQL"],
        link: "https://romaniancryptoinvestmenttracker.vercel.app",
        code: "https://github.com/davidkakov111/InvestmentTrackerClient",
        learnMore: "",
        isGame: false,
    },
    {
        title: "Animal Invasion",
        description: "Discover my inaugural large-scale 2D game coded in Python using the Arcade game developer module. Assume the role of a businessman maneuvering challenges to collect bitcoins while evading perilous creatures.",
        image: "/arcade.jpeg",
        tags: ["Arcade", "Python"],
        link: "",
        code: "https://github.com/davidkakov111/Game",
        learnMore: "",
        isGame: true,
    },
];

// Projects section component
export default function Projects() {

    // TODO - move the download function to the modal
    // Function to handle game download
    const downloadGame = () => {
        const a = document.createElement("a");
        a.href = "https://github.com/davidkakov111/My_Game/raw/zip/ANIMAL_INVASION.zip";
        a.download = "ANIMAL_INVASION.zip";
        a.click();
    };

    return (
        <Box sx={{ my: 6 }} id="projects">
            <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", mb: 4 }}>
                Projects
            </Typography>
            <Grid container spacing={4}>
                {projects.map((project, i) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i} sx={{
                        cursor: "pointer",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        "&:hover": {transform: "scale(1.03)"},
                    }} onClick={() => {alert("TODO - open modal with more details about the project")}}>
                        <Card sx={{ borderRadius: 3, boxShadow: 3, height: "100%", display: "flex", flexDirection: "column" }}>
                            <CardMedia component="img" height="180" image={project.image} alt={project.title} />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" fontWeight="bold">
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                    {project.description}
                                </Typography>
                                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                                    {project.tags.map((tag, idx) => (
                                        <Chip key={idx} label={tag} size="small" />
                                    ))}
                                </Box>
                                {/* TODO - move the buttons to the modal */}
                                {/* <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                                    {project.isGame 
                                        ? <Button onClick={downloadGame} size="small" sx={{ flex: 1 }}
                                            variant="contained">Download</Button> 
                                        : <Button size="small" href={project.link} target="_blank" sx={{ flex: 1 }}
                                            variant="contained">Website</Button>}
                                    <Button size="small" href={project.code || project.learnMore} target="_blank"
                                        variant="contained" sx={{ flex: 1 }}>{project.code ? 'Code' : 'Learn'}</Button>
                                </Box> */}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
