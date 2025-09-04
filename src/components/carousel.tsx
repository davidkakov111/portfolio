import { useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";

// My tech stack logos
const logos = [
    { src: "/logos/js.png", alt: "JavaScript", isDark: true, isLight: true },
    { src: "/logos/ts.png", alt: "TypeScript", isDark: true, isLight: true },
    { src: "/logos/nodejs.png", alt: "Node.js", isDark: true, isLight: true },
    { src: "/logos/react.png", alt: "React", isDark: true, isLight: true },
    { src: "/logos/angular.png", alt: "Angular", isDark: true, isLight: true },
    { src: "/logos/nextjs-white.png", alt: "Next.js", isDark: true, isLight: false },
    { src: "/logos/nextjs-black.png", alt: "Next.js", isDark: false, isLight: true },
    { src: "/logos/db.png", alt: "Database", isDark: true, isLight: true },
    { src: "/logos/git.png", alt: "Git", isDark: true, isLight: true },
    { src: "/logos/docker.png", alt: "Docker", isDark: true, isLight: true },
];

type TechCarouselProps = {
    imgs?: { src: string; alt: string; isDark: boolean; isLight: boolean }[];
};

// Image carousel
export default function TechCarousel({ imgs = logos }: TechCarouselProps) {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [angle, setAngle] = useState(0);

    // Filter images based on theme
    const theme = useTheme();
    const imgsFiltered = imgs.filter(img =>
        theme.palette.mode === "dark" ? img.isDark : img.isLight
    );

    // Rotate
    useEffect(() => {
        let animationFrame: number;
        let angleLocal = 0;

        const rotate = () => {
            angleLocal += 0.2;
            setAngle(angleLocal);
            animationFrame = requestAnimationFrame(rotate);
        };

        rotate();
        return () => cancelAnimationFrame(animationFrame);
    }, []);

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
                            <img
                                key={img.alt}
                                src={img.src}
                                alt={img.alt}
                                style={{
                                    width: `${sizePercent}%`,
                                    height: "auto",
                                    position: "absolute",
                                    left: "50%",
                                    top: "50%",
                                    transform: `translateX(${x}px) translateZ(${z}px) translate(-50%, -50%)`,
                                    WebkitBoxReflect:
                                        "below 8px linear-gradient(transparent, rgba(0,0,0,0.2))",
                                    opacity: 0.3 + 0.7 * depthFactor,
                                    filter: `brightness(${0.5 + 0.5 * depthFactor})`,
                                }}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
