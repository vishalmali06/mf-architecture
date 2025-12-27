import SectionTitle from '../../ui/SectionTitle';
import { teachingData } from '../../data/teaching';

const Teaching: React.FC = () => {
  return (
    <section
      id="teaching"
      className="py-28 max-w-5xl mx-auto px-6"
    >
      <SectionTitle
        title="Teaching & Knowledge Sharing"
        subtitle="Mentoring teams, sharing real-world insights, and learning continuously"
      />

      <div className="space-y-10">
        {teachingData.map((item, index) => (
          <div
            key={index}
            className="
              group flex gap-6 p-6 rounded-2xl
              border border-gray-200 dark:border-gray-700
              bg-white dark:bg-gray-800
              hover:shadow-xl transition-all
            "
          >
            {/* Emoji Icon */}
            <div
              className="
                text-4xl shrink-0
                w-14 h-14 flex items-center justify-center
                rounded-xl
                bg-indigo-50 dark:bg-indigo-900/30
              "
            >
              {item.emoji}
            </div>

            {/* Content */}
            <div>
              <h3 className="text-xl font-bold mb-1">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {item.description}
              </p>

              <ul className="space-y-2">
                {item.highlights.map((point, i) => (
                  <li
                    key={i}
                    className="text-sm flex items-start gap-2"
                  >
                    <span className="text-indigo-500">✔</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Callout */}
      <div
        className="
          mt-16 p-6 rounded-2xl text-center
          bg-gradient-to-r from-indigo-500 to-purple-500
          text-white
        "
      >
        <p className="text-lg font-semibold">
          “Teaching is not about knowing everything,
          it’s about helping others grow faster.”
        </p>
      </div>
    </section>
  );
};

export default Teaching;
