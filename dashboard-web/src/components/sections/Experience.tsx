import { experiences } from "../../data/experiences";
import Card from "../../ui/Card";
import SectionTitle from "../../ui/SectionTitle";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-6">
      <SectionTitle
        title="Real-World Experience"
        subtitle="Problems I solved in real production systems"
      />

      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <div className="flex flex-col lg:flex-row gap-8">
                
                {/* LEFT – STORY */}
                <div className="flex-1 space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {exp.context}
                    </p>
                  </div>

                  {/* Problem */}
                  <div className="flex gap-3">
                    <span className="text-xl">⚠️</span>
                    <div>
                      <p className="font-semibold">Problem</p>
                      <p className="text-gray-700 dark:text-gray-300">
                        {exp.problem}
                      </p>
                    </div>
                  </div>

                  {/* Approach */}
                  <div className="flex gap-3">
                    <span className="text-xl">🛠️</span>
                    <div>
                      <p className="font-semibold">My Approach</p>
                      <ul className="mt-1 space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                        {exp.approach.map((step, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-blue-500">•</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="flex gap-3">
                    <span className="text-xl">📈</span>
                    <div>
                      <p className="font-semibold">Impact</p>
                      <p className="text-gray-700 dark:text-gray-300">
                        {exp.impact}
                      </p>
                    </div>
                  </div>
                </div>

                {/* RIGHT – TECH STACK */}
                <div className="lg:w-56 flex flex-wrap lg:flex-col gap-2">
                  {exp.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full 
                      bg-gray-100 dark:bg-gray-800 
                      text-gray-800 dark:text-gray-200
                      border border-gray-200 dark:border-gray-700
                      hover:bg-gray-200 dark:hover:bg-gray-700
                      transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
