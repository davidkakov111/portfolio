import { Box, Typography, Button, Grid, useTheme } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

// Contact section component
export default function Contact() {
    const theme = useTheme();
    const email = "kovacs.cs.david@gmail.com";
    const subject = encodeURIComponent("Portfolio Inquiry");

    return (
        <Box
            id="contact"
            sx={{
                py: 8,
                px: { xs: 2, sm: 4, md: 8 },
                textAlign: "center",
            }}
        >
            <Typography variant="h4" fontWeight="bold" mb={2}>
                Contact Me
            </Typography>
            <Typography variant="body1" mb={6}>
                Interested in working together or have a question? I’m available as an employee, freelancer, or contractor. Click the button below to send me an email directly.
            </Typography>

            <Grid container justifyContent="center">
                <Grid>
                    <Button   
                        target="_blank" 
                        variant="contained"
                        color="primary"
                        size="large"
                        href={`mailto:${email}?subject=${subject}`}
                        startIcon={<EmailIcon />}
                        sx={{
                            px: 4,
                            py: 1.5,
                            fontWeight: "bold",
                            transition: "transform 0.2s ease, box-shadow 0.2s ease",
                            "&:hover": {
                                transform: "scale(1.05)",
                                boxShadow: theme.palette.mode === "dark" ? 6 : 4,
                            },
                        }}
                    >
                        Send Email
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}
