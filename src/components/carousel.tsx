import { Tooltip, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";

// Tech stack logos
const logos = [
    { src: "/logos/js.png", alt: "JavaScript", link: "https://www.javascript.com/", isDark: true, isLight: true },
    { src: "/logos/ts.png", alt: "TypeScript", link: "https://www.typescriptlang.org/", isDark: true, isLight: true },
    { src: "/logos/nodejs.png", alt: "Node.js", link: "https://nodejs.org/", isDark: true, isLight: true },
    { src: "/logos/react.png", alt: "React", link: "https://react.dev/", isDark: true, isLight: true },
    { src: "/logos/angular.png", alt: "Angular", link: "https://angular.dev/", isDark: true, isLight: true },
    { src: "/logos/nextjs-white.png", alt: "Next.js", link: "https://nextjs.org/", isDark: true, isLight: false },
    { src: "/logos/nextjs-black.png", alt: "Next.js", link: "https://nextjs.org/", isDark: false, isLight: true },
    { src: "/logos/db.png", alt: "Database", link: "https://en.wikipedia.org/wiki/Database", isDark: true, isLight: true },
    { src: "/logos/git.png", alt: "Git", link: "https://git-scm.com/", isDark: true, isLight: true },
    { src: "/logos/docker.png", alt: "Docker", link: "https://www.docker.com/", isDark: true, isLight: true },
];

type TechCarouselProps = {
    imgs?: { src: string; alt: string; link: string; isDark: boolean; isLight: boolean }[];
};

// Image carousel
export default function TechCarousel({ imgs = logos }: TechCarouselProps) {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [angle, setAngle] = useState(0);
    const [paused, setPaused] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Filter images based on theme
    const theme = useTheme();
    const imgsFiltered = imgs.filter(img =>
        theme.palette.mode === "dark" ? img.isDark : img.isLight
    );

    // Rotate
    useEffect(() => {
        if (paused) return;  // stop animation

        let animationFrame: number;
        let angleLocal = angle;

        const rotate = () => {
            angleLocal += 0.2;
            setAngle(angleLocal);
            animationFrame = requestAnimationFrame(rotate);
        };

        rotate();
        return () => cancelAnimationFrame(animationFrame);
    }, [paused]);

    return (
        <div
            style={{
                perspective: "1000px",
                width: "100%",
                aspectRatio: "4 / 1",
                margin: "auto",
                marginBottom: '20%'
            }}
        >
            {/* Tilted div */}
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    transformStyle: "preserve-3d",
                    transform: "rotateX(-8deg)",
                }}
            >
                {/* Carousel */}
                <div
                    ref={carouselRef}
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transformStyle: "preserve-3d",
                    }}
                >
                    {/* Actual images */}
                    {imgsFiltered.map((img, i) => {
                        const theta = (360 / imgsFiltered.length) * i;
                        const angleRad = ((theta + angle) * Math.PI) / 180;

                        const radius = (carouselRef.current?.offsetWidth || 400) / 3; // smaller radius
                        const x = radius * Math.sin(angleRad);
                        const z = radius * Math.cos(angleRad);

                        const depthFactor = (z / radius + 1) / 2;

                        const sizePercent = Math.max(8, (carouselRef.current?.offsetWidth || 400) / 20 / 400 * 60);

                        return (
                            <Tooltip key={img.alt} title={img.alt} arrow placement="top">
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    style={{
                                        width: hoveredIndex === i ? `${sizePercent * 1.2}%` : `${sizePercent}%`,
                                        height: "auto",
                                        filter: `brightness(${hoveredIndex === i ? 1.2 : 0.5 + 0.5 * depthFactor})`,
                                        transition: "transform 0.1s ease, width 0.1s ease, opacity 0.1s ease",
                                        cursor: "pointer",
                                        position: "absolute",
                                        left: "50%",
                                        top: "50%",
                                        transform: `translateX(${x}px) translateZ(${z}px) translate(-50%, -50%)`,
                                        WebkitBoxReflect:
                                            "below 8px linear-gradient(transparent, rgba(0,0,0,0.2))",
                                        opacity: 0.3 + 0.7 * depthFactor,
                                    }}
                                    onMouseEnter={() => {
                                        setPaused(true);        
                                        setHoveredIndex(i);
                                    }}
                                    onMouseLeave={() => {
                                        setPaused(false);                                  
                                        setHoveredIndex(null);
                                    }}
                                    onClick={() => window.open(img.link, "_blank", "noopener,noreferrer")}
                                />
                            </Tooltip>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
