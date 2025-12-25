
import { timeline } from '../../data/timeline';
import Card from '../../ui/Card';
import SectionTitle from '../../ui/SectionTitle';

const Timeline: React.FC = () => {
    return (
        <section id="journey" className="py-20 max-w-6xl mx-auto px-6">
            <SectionTitle title="Career Journey" />

            <div className="grid md:grid-cols-2 gap-6">
                {timeline.map(item => (
                    <Card key={item.phase}>
                        <h3 className="font-bold">{item.phase}</h3>
                        <p className="text-sm text-gray-500">{item.period}</p>
                        <p className="mt-2">{item.description}</p>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Timeline;
