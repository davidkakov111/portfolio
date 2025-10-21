import {
  Modal,
  Box,
  Typography,
  Chip,
  Button,
  Stack,
  Divider,
  Fade,
  CardMedia,
  IconButton
} from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import LanguageIcon from '@mui/icons-material/Language';
import CodeIcon from '@mui/icons-material/Code';
import CloseIcon from "@mui/icons-material/Close";

type Project = {
  title: string;
  image: string,
  descriptionHtml: string; // HTML string
  techStack: string[];
  link: string;
  code: {link: string, label: string}[];
  isGame: boolean;
};

interface ProjectDetailsModalProps {
  project: Project | undefined;
  onClose: () => void;
}

// Modal component to show detailed project information
export default function ProjectDetailsModal({ project, onClose }: ProjectDetailsModalProps) {

    // Function to handle game download
    const downloadGame = () => {
        const a = document.createElement("a");
        a.href = "https://github.com/davidkakov111/My_Game/raw/zip/ANIMAL_INVASION.zip";
        a.download = "ANIMAL_INVASION.zip";
        a.click();
    };

    return (
        <Modal open={!!project} onClose={onClose} closeAfterTransition >
            <Fade in={!!project}>
                <Box
                    sx={{
                        position: "absolute" as const,
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: '80%',
                        maxWidth: 1200,
                        bgcolor: "background.paper",
                        color: "text.primary",
                        borderRadius: 6,
                        boxShadow: 24,
                        maxHeight: "90vh",
                        overflowY: "auto",
                        p: 4
                    }}
                >
                    {/* Close Button */}
                    <IconButton
                        onClick={onClose}
                        sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        color: "text.secondary",
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* Title */}
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                        {project?.title}
                    </Typography>

                    {/* Display the img */}
                    <Box sx={{ mb: 2, justifyContent: "center", display: "flex" }}>
                        <CardMedia
                            component="img"
                            image={project?.image}
                            alt={project?.title}
                            sx={{
                                width: "100%",
                                maxWidth: 500,
                                height: "auto",
                                borderRadius: 2,
                                objectFit: "contain"
                            }}
                        />
                    </Box>
                
                    {/* Description (rendered as HTML) */}
                    <Box
                        sx={{ mb: 2, fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif" }}
                        dangerouslySetInnerHTML={{ __html: project?.descriptionHtml ?? '' }}
                    />

                    <Divider sx={{ my: 2 }} />

                    {/* Tech stack */}
                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                        Tech Stack
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={1} mb={3}>
                        {project?.techStack.map((tech, i) => (
                            <Chip key={i} label={tech} size="small" color="primary" />
                        ))}
                    </Stack>

                    {/* Buttons */}
                    <Stack direction="row" spacing={2} justifyContent="center">
                        {project?.isGame ? (
                            <Button
                                variant="contained"
                                onClick={downloadGame}
                                sx={{ flex: 1 }}
                                startIcon={<DownloadIcon />}
                            >
                                Download
                            </Button>
                        ) : project?.link ? (
                            <Button
                                variant="contained"
                                href={project?.link}
                                target="_blank"
                                sx={{ flex: 1 }}
                                startIcon={<LanguageIcon />}
                            >
                                Website
                            </Button>
                        ) : null}
                        
                        {/* Source code buttons */}
                        {project?.code.map((codeObj) => <Button
                                key={codeObj.label}
                                variant="contained"
                                href={codeObj.link}
                                target="_blank"
                                sx={{ flex: 1 }}
                                startIcon={<CodeIcon />}
                            >{codeObj.label}</Button>
                        )}
                    </Stack>
                </Box>
            </Fade>
        </Modal>
    );
}
