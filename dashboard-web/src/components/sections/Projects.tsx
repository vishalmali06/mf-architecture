import SectionTitle from "../../ui/SectionTitle";
import { projects } from "../../data/projects";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-28 max-w-6xl mx-auto px-6"
    >
      <SectionTitle
        title="Projects That Define My Work"
        subtitle="Enterprise systems where architecture, scale, and impact mattered"
      />

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="
              group relative p-7 rounded-2xl
              border border-gray-200 dark:border-gray-700
              bg-white dark:bg-gray-900
              hover:-translate-y-1 hover:shadow-xl
              transition-all duration-300
            "
          >
            {/* Accent bar */}
            <div className="absolute top-0 left-0 ml-2 w-[97%] h-0.5 rounded-t-2xl bg-gradient-to-r from-indigo-500 to-purple-500" />

            {/* Title */}
            <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900 dark:text-gray-100">
              {project.title}
            </h3>

            {/* Short Description */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-5">
              {project.shortDesc}
            </p>

            {/* Highlights */}
            <ul className="space-y-2 mb-6">
              {project.highlights.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm"
                >
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="
                    text-xs px-3 py-1 rounded-full
                    bg-indigo-50 text-indigo-700
                    dark:bg-indigo-900/30 dark:text-indigo-300
                  "
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Hover hint */}
            <div className="absolute bottom-4 right-4 text-xs text-indigo-500 opacity-0 group-hover:opacity-100 transition">
              Case study mindset →
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
