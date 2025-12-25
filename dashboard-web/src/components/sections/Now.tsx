import SectionTitle from '../../ui/SectionTitle';
import { nowData } from '../../data/now';

const Now: React.FC = () => {
  return (
    <section
      id="now"
      className="py-28 max-w-5xl mx-auto px-6"
    >
      <SectionTitle
        title="What I’m Focused On Right Now"
        subtitle="My current mindset and learning direction"
      />

      <div className="grid gap-8 md:grid-cols-3">
        {nowData.map((item, index) => (
          <div
            key={index}
            className="
              group p-6 rounded-2xl
              border border-gray-200 dark:border-gray-700
              bg-white dark:bg-gray-800
              hover:-translate-y-1 hover:shadow-xl
              transition-all duration-300
            "
          >
            {/* Icon */}
            <div
              className="
                text-4xl mb-4
                w-14 h-14 flex items-center justify-center
                rounded-xl
                bg-indigo-50 dark:bg-indigo-900/30
              "
            >
              {item.emoji}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {item.description}
            </p>

            {/* Points */}
            <ul className="space-y-2">
              {item.points.map((point, i) => (
                <li
                  key={i}
                  className="text-sm flex items-start gap-2"
                >
                  <span className="text-indigo-500">➜</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Insight */}
      <div
        className="
          mt-16 p-6 rounded-2xl
          bg-gray-50 dark:bg-gray-900
          border border-dashed border-gray-300 dark:border-gray-700
          text-center
        "
      >
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
          I believe great frontend architecture is not about tools,
          but about <strong>decisions, trade-offs, and clarity</strong>.
          This is the mindset I’m building every day.
        </p>
      </div>
    </section>
  );
};

export default Now;
