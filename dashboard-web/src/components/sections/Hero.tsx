const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center text-center px-6">
            <div>
                <h1 className="text-5xl font-bold mb-4">
                    Frontend Engineer with 10+ Years
                </h1>

                <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                    I build scalable enterprise UIs and share real-world frontend experience.
                </p>

                <div className="mt-6 flex justify-center gap-4">
                    <a
                        href="#journey"
                        className="px-6 py-2 bg-black text-white rounded"
                    >
                        View My Journey
                    </a>

                    <a
                        href="#projects"
                        className="px-6 py-2 border rounded"
                    >
                        Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
