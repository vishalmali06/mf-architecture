import HangingLamp from "../BgAnimations/HangingLamp";
import OrbitIcons from "../BgAnimations/OrbitIcons";
import SnowCanvas from "../BgAnimations/SnowCanvas";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-white dark:bg-gray-900">
      <SnowCanvas />
      <OrbitIcons />
      <HangingLamp color="yellow" left="4%" top="25px" />
      <HangingLamp color="red" left="6%" top="45px" />
      
      <div className="max-w-4xl text-center">
        {/* Badge */}
        <div className="relative inline-block mb-6 px-6 py-2 rounded-full text-sm font-semibold
          text-transparent bg-clip-text
          bg-gradient-to-r from-orange-500 via-yellow-300 to-orange-500
          animate-shiny-text
          overflow-hidden dark:bg-gradient-to-r dark:from-orange-400 dark:via-yellow-200 dark:to-orange-400">

          Associate Software Architect • Frontend & Full-Stack

          {/* Moving border illusion */}
          <span className="absolute inset-0 rounded-full border-overlay pointer-events-none"></span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-gray-100 mb-6">
          Designing{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Scalable Frontend Architectures
          </span>
          <br />
          for Enterprise Systems
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
          10+ years of experience building high-impact UI platforms using
          <strong> React, Micro-Frontends, and Cloud-Native architectures</strong>.
          I focus on performance, scalability, and real-world maintainability.
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            "Micro-Frontends (Qiankun)",
            "React & Next.js at Scale",
            "AWS & Azure DevOps",
            "Enterprise UI Architecture",
            "Mentorship & Team Leadership",
          ].map((item) => (
            <span
              key={item}
              className="px-4 py-1.5 rounded-md text-sm
                  bg-gray-100 text-gray-700
                  dark:bg-gray-800 dark:text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#journey"
            className="px-8 py-3 rounded-md font-medium
                bg-gray-900 text-white
                dark:bg-gray-100 dark:text-gray-900
                hover:opacity-90 transition"
          >
            Explore My Journey
          </a>

          <a
            href="#projects"
            className="px-8 py-3 rounded-md font-medium
                border border-gray-300 text-gray-700
                dark:border-gray-700 dark:text-gray-300
                hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
