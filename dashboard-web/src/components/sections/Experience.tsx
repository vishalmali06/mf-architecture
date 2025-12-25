import { experiences } from "../../data/experiences";
import Card from "../../ui/Card";
import SectionTitle from "../../ui/SectionTitle";


const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-24 max-w-6xl mx-auto px-6"
    >
      <SectionTitle
        title="Real-World Experience"
        subtitle="Problems I solved in real production systems"
      />

      <div className="space-y-10">
        {experiences.map(exp => (
          <Card key={exp.id}>
            <div className="flex flex-col md:flex-row md:gap-8">
              {/* LEFT – Story */}
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-bold">
                  {exp.title}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {exp.context}
                </p>

                <div>
                  <p className="font-semibold">Problem</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {exp.problem}
                  </p>
                </div>

                <div>
                  <p className="font-semibold">My Approach</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                    {exp.approach.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-semibold">Impact</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {exp.impact}
                  </p>
                </div>
              </div>

              {/* RIGHT – Tags */}
              <div className="mt-6 md:mt-0 md:w-48 flex md:flex-col gap-2 flex-wrap">
                {exp.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;
