import { timeline } from '../../data/timeline';
import Card from '../../ui/Card';
import SectionTitle from '../../ui/SectionTitle';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Timeline: React.FC = () => {
    return (
        <section id="journey" className="max-w-6xl xl:max-w-5xl mx-auto px-0">
            <SectionTitle
                title="Career Journey"
                subtitle="10+ years of experience across government, logistics, telecom, and enterprise architecture."
            />

            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-2 top-0 w-1 bg-gray-300 dark:bg-gray-600 h-full"></div>

                {timeline.map((item, idx) => {
                    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

                    return (
                        <motion.div
                            key={item.phase}
                            ref={ref}
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="mb-10 ml-8 relative"
                        >
                            {/* Phase Marker */}
                            <span className="absolute -left-5 top-2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white dark:border-gray-900" />

                            <Card className="w-full p-5 hover:shadow-lg transition-shadow">
                                <div className="absolute inset-y-2 left-0 w-px rounded-full bg-gradient-to-b from-blue-400 to-indigo-600" />

                                <h3 className="font-bold text-lg leading-tight">{item.phase}</h3>
                                <p className="text-sm text-gray-500 mb-1">{item.period}</p>
                                <p className="text-gray-700 dark:text-gray-300 mb-3">{item.description}</p>
                                {item.highlights && (
                                    <ul className="mt-3 space-y-1">
                                        {item.highlights.map((hl, idx) => (
                                            <motion.li
                                                key={hl}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm"
                                            >
                                                <span className="text-blue-500 dark:text-blue-400">•</span>
                                                <span>{hl}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                )}

                            </Card>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Timeline;
