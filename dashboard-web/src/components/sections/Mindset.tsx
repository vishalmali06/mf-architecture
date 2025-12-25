import SectionTitle from '../../ui/SectionTitle';
import { mindsetData } from '../../data/mindset';

const Mindset: React.FC = () => {
  return (
    <section
      id="mindset"
      className="py-28 max-w-6xl mx-auto px-6"
    >
      <SectionTitle
        title="How I Think as an Engineer"
        subtitle="My decision-making approach beyond tools and frameworks"
      />

      <div className="grid gap-8 md:grid-cols-2">
        {mindsetData.map(item => (
          <div
            key={item.id}
            className="
              relative p-6 rounded-2xl
              border border-gray-200 dark:border-gray-700
              bg-white/70 dark:bg-gray-800/70
              backdrop-blur
              hover:shadow-xl transition-all
            "
          >
            {/* Question */}
            <div className="mb-4">
              <span className="text-xs uppercase tracking-wide text-gray-500">
                The Question
              </span>
              <h3 className="text-lg font-bold mt-1">
                {item.question}
              </h3>
            </div>

            {/* Thinking */}
            <div className="mb-4">
              <span className="text-xs uppercase tracking-wide text-gray-500">
                My Thinking
              </span>
              <p className="mt-1 text-gray-700 dark:text-gray-300">
                {item.thinking}
              </p>
            </div>

            {/* Habit */}
            <div>
              <span className="text-xs uppercase tracking-wide text-gray-500">
                In Practice
              </span>
              <p className="mt-1 text-gray-700 dark:text-gray-300">
                {item.habit}
              </p>
            </div>

            {/* Decorative Accent */}
            <div className="absolute top-4 right-4 text-4xl opacity-10">
              🧠
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mindset;
