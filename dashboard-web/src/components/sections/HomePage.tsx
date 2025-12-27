import Navbar from "../layout/Navbar";
import Contact from "./Contact";
import Experience from "./Experience";
import Hero from "./Hero";
import Mindset from "./Mindset";
import Now from "./Now";
import Projects from "./Projects";
import Teaching from "./Teaching";
import Timeline from "./Timeline";

export default function HomePage() {
    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <Navbar />
            <Hero />
            <Timeline />
            <Experience />
            <Mindset />
            <Projects />
            <Teaching />
            <Now />
            <Contact />
        </div>
    );
}
