import SectionTitle from '../../ui/SectionTitle';
import { projects } from '../../data/projects';

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-28 max-w-6xl mx-auto px-6"
    >
      <SectionTitle
        title="Projects That Define My Work"
        subtitle="A few meaningful problems I enjoyed solving"
      />

      <div className="grid gap-8 md:grid-cols-3">
        {projects.map(project => (
          <div
            key={project.id}
            className="
              group relative p-6 rounded-2xl
              border border-gray-200 dark:border-gray-700
              bg-white dark:bg-gray-800
              hover:-translate-y-1 hover:shadow-xl
              transition-all duration-300
            "
          >
            {/* Top Accent */}
            <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-indigo-500 to-purple-500" />

            {/* Title */}
            <h3 className="text-xl font-bold mt-4 mb-2">
              {project.title}
            </h3>

            {/* Short Description */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {project.shortDesc}
            </p>

            {/* Highlights */}
            <ul className="space-y-2 mb-4">
              {project.highlights.map((point, index) => (
                <li
                  key={index}
                  className="text-sm flex items-start gap-2"
                >
                  <span className="text-indigo-500">▹</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map(t => (
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

            {/* Hover Hint */}
            <div className="absolute bottom-4 right-4 text-xs opacity-0 group-hover:opacity-100 transition">
              🚀
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
