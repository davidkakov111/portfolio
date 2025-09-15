import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Box, Typography, Card, CardContent, Button, Chip } from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// Example data
const experiences = [
    {
        role: "Full Stack Developer",
        company: "Skyint Ltd.",
        period: "Apr 2025 - Present",
        summary: "At Skyint Ltd, a company delivering software for the European Space Agency and commercial clients, I architected and developed a web platform that automated manual environmental lab workflows, cutting reporting and data processing time by 50%, saving staff hours weekly and enabling real-time pollution monitoring.",      
        description: {listItems: [
            'Designed and managed the database using PostgreSQL, TimescaleDB, Prisma, and Dravio to handle complex lab and field data.',
            'Built advanced CRUD interfaces that streamlined management of chemical and field measurement records.',
            'Automated DOCX report generation from database data, reducing manual workload and ensuring compliance.',
            'Developed custom Excel importers to integrate diverse lab data formats into a unified system.',
            'Created real-time statistical dashboards for monitoring pollution levels across multiple locations.',
            'Delivered measurable business impact by reducing manual reporting and data processing time by over 50%, saving staff hours weekly.'
        ], techStack: ['TypeScript', 'Next.js', 'React', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker']},
    },
    {
        role: "Backend Developer (Freelance)",
        company: "Nexon",
        period: "Jun 2024 - Sep 2024",
        summary: "As a freelance backend developer, I built the scalable backend for Nexonity, a gamified location-based community app. I designed secure systems to support thousands of users, integrated in-app currency and rewards, and delivered features that boosted engagement, retention, and monetization for an influencer-driven platform.",
        description: {listItems: [
            'Developed a modular, scalable backend using Node.js, NestJS, and PostgreSQL to support thousands of concurrent users.',
            'Implemented secure user registration and profile systems to protect user data and ensure smooth onboarding.',
            'Designed and managed complex data relationships with Prisma ORM for storing user activity, rewards, and in-app currency balances.',
            'Integrated geographical task restrictions, enabling location-based challenges and personalized rewards.',
            'Developed a push notification system that increased user engagement and retention.',
            'Built a CI/CD pipeline with Docker to streamline deployment and ensure fast iteration cycles.',
            'Optimized backend performance, reliability, and scalability to handle a rapidly growing community platform.'
        ], techStack: ['Node.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker']},
    },
    {
        role: "Full Stack Developer",
        company: "Romanian dev agency",
        period: "May 2024 - Apr 2025",
        summary: "Contributed to multiple client projects for a Romanian development agency, including a community-focused search platform, a WordPress-like CMS for eCommerce, and advanced webshop customizations. Delivered solutions that automated workflows, reduced manual intervention, and empowered users with no coding skills to build their own webshops.",        
        description: {listItems: [
            'Developed a custom CMS (similar to WordPress) in Angular, enabling non-technical users to build and fully customize their own eCommerce webshops through an admin panel.',
            'Designed and implemented scalable backend systems with Node.js, integrating both MySQL and PostgreSQL databases.',
            'Developed a community-focused platform with its own search engine, database of local websites, and interactive games tied to local folk traditions—strengthening engagement within the community ecosystem.',
            'Built and customized webshops and integrations to automate order processing with external factories, reducing manual work and interventions to nearly zero.',
            'Maintained clean, scalable codebases and delivered reliable production-ready systems across multiple projects.'
        ], techStack: ['TypeScript', 'Angular', 'Node.js', 'WP', 'PostgreSQL', 'MySQL']},
    },    
];

// Experience section component
export default function Experience() {
    const [expanded, setExpanded] = useState<Record<number, boolean>>({0: false, 1: false, 2: false});

    return (
        <Box sx={{ mt: 6 }} id="experience">
            <Typography
                variant="h4"
                sx={{ fontWeight: "bold", textAlign: "center", mb: 4 }}
            >
                Experience
            </Typography>

            <Timeline position="alternate">
                {experiences.map((exp, index) => (
                    <TimelineItem key={index}>
                        {/* Time period */}
                        <TimelineOppositeContent
                            sx={{ m: "auto 0", fontSize: { xs: "0.85rem", sm: "1rem", md: "1.2rem" } }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            {exp.period}
                        </TimelineOppositeContent>

                        {/* Line separator */}
                        <TimelineSeparator>
                            <TimelineDot color="primary" />
                            {index !== experiences.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>

                        {/* Experience details */}
                        <TimelineContent sx={{ py: "12px", px: 2 }}>
                            <Card sx={{ borderRadius: 3, boxShadow: 3, textAlign: "left" }}>
                                <CardContent>
                                    <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" } }}>
                                        {exp.role}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: { xs: "0.85rem", sm: "1rem", md: "1.2rem" } }}>
                                        {exp.company}
                                    </Typography>
                                    <Typography component="div" variant="body2" sx={{ mt: 1, fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" } }}>
                                        {exp.summary}

                                        {/* Expandable description */}
                                        {expanded[index] && <>
                                            {exp.description.listItems && (
                                                <Box component="ul" sx={{ mt: 1, pl: 2 }}>
                                                    {exp.description.listItems.map((item, i) => (
                                                        <li key={i}>
                                                            <Typography variant="body2" sx={{ fontSize: { 
                                                                xs: "0.6rem", sm: "0.8rem", md: "1rem" } }}>{item}</Typography>
                                                        </li>
                                                    ))}
                                                </Box>
                                            )}

                                            {exp.description.techStack && (
                                                <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
                                                    {exp.description.techStack.map((tech, i) => (
                                                        <Chip key={i} label={tech} size="small" color="primary" sx={{
                                                            fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" },
                                                            height: { xs: 20, sm: 24, md: 28 },
                                                        }}/>
                                                    ))}
                                                </Box>
                                            )}
                                        </>}
                                    </Typography>

                                    {/* Expand / collapse button */}
                                    <Button 
                                        size="small" 
                                        sx={{ mt: 2 }}
                                        onClick={() => setExpanded(prev => ({...prev, [index]: !prev[index]}))} 
                                        endIcon={expanded[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                    >
                                        {expanded[index] ? "Show Less" : "Show More"}
                                    </Button>
                                </CardContent>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Box>
    );
}
