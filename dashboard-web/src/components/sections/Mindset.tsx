import SectionTitle from "../../ui/SectionTitle";
import { mindsetData } from "../../data/mindset";

const Mindset: React.FC = () => {
  return (
    <section
      id="mindset"
      className="py-28 max-w-6xl mx-auto px-6"
    >
      <SectionTitle
        title="How I Think as an Engineer"
        subtitle="Principles that guide my architectural and engineering decisions"
      />

      <div className="grid gap-8 md:grid-cols-2">
        {mindsetData.map((item) => (
          <div
            key={item.id}
            className="
              relative p-7 rounded-2xl
              border border-gray-200 dark:border-gray-700
              bg-white dark:bg-gray-900
              hover:shadow-xl hover:-translate-y-1
              transition-all duration-300
            "
          >
            {/* Accent bar */}
            <div className="absolute inset-y-2 left-0 w-px rounded-full bg-gradient-to-b from-blue-400 to-indigo-600" />
            
            {/* Question */}
            <div className="mb-4">
              <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                The Question
              </span>
              <h3 className="text-lg font-semibold mt-1 text-gray-900 dark:text-gray-100">
                {item.question}
              </h3>
            </div>

            {/* Thinking */}
            <div className="mb-4">
              <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                My Thinking
              </span>
              <p className="mt-1 text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.thinking}
              </p>
            </div>

            {/* Practice */}
            <div>
              <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                In Practice
              </span>
              <p className="mt-1 text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.habit}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mindset;
