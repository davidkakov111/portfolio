import { Box, Card, CardContent, CardMedia, Typography, Chip, Pagination } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import ProjectDetailsModal from "./projectDetails";
import { projects } from "./projectsData";
import { scrollToSection } from "../../services/shared";
import { motion, AnimatePresence } from "framer-motion";

const ITEMS_PER_PAGE = 6;

// Projects section component
export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[number] | undefined>(undefined);
    const [page, setPage] = useState(1);

    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const displayed = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // On mount, check if URL contains project slug
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("project");
        if (id) {
            scrollToSection("projects");

            // Open the modal with the project
            const project = projects.find((p) => p.slug === id);
            if (project) {
                setSelectedProject(project);

                // Clean up the url
                const url = new URL(window.location.href);
                url.searchParams.delete("project");
                window.history.replaceState({}, "", url);
            }
        }
    }, []);

    return (<>
        <Box sx={{ my: 6 }} id="projects">
            <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", mb: 4 }}>
                Projects
            </Typography>
            <Box sx={{ position: "relative", overflow: "hidden" }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={page}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Grid container spacing={4}>
                            {displayed.map((project, i) => (
                                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i} sx={{
                                    cursor: "pointer",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    "&:hover": {transform: "scale(1.03)"},
                                }} onClick={() => { setSelectedProject(project); }}>
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
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </AnimatePresence>
            </Box>

            {/* Pagination */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                <Pagination
                    count={Math.ceil(projects.length / ITEMS_PER_PAGE)}
                    page={page}
                    onChange={(_: unknown, value: number) => {setPage(value);}}
                    color="primary"
                    size="large"
                    shape="rounded"
                    siblingCount={1}
                    boundaryCount={1}
                />
            </Box>
        </Box>

        {/* Modal to display detailed project description */}
        <ProjectDetailsModal project={selectedProject} onClose={() => setSelectedProject(undefined)} />
    </>);
}
