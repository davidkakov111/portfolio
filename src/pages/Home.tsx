import Experience from "../components/experience";
import About from "../components/about";
import Hero from "../components/hero";
import Projects from "../components/project/projects";
import Contact from "../components/contact";

// Home page component
export default function HomePage() {
    return (<>
        {/* Sections */}
        <Hero />

        <About />

        <Experience />

        <Projects />

        <Contact />
    </>);
}
