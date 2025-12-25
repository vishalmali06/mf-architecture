const Contact: React.FC = () => {
    return (
        <section
            id="contact"
            className="py-28 max-w-5xl mx-auto px-6"
        >
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Let’s Connect
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                    Whether it’s about frontend architecture, mentoring, or
                    building meaningful products — I’m always open to a good conversation.
                </p>
            </div>

            {/* Contact Card */}
            <div
                className="
            relative p-10 rounded-3xl
            bg-gradient-to-br from-indigo-500 to-purple-600
            text-white
            shadow-2xl
          "
            >
                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl blur-3xl bg-indigo-500/30 -z-10" />

                <div className="flex flex-col items-center text-center">
                    <h3 className="text-2xl font-semibold mb-4">
                        Start a Conversation
                    </h3>

                    <p className="text-indigo-100 max-w-md mb-8">
                        If you’re looking for someone who cares deeply about
                        frontend quality, architecture, and team growth —
                        let’s talk.
                    </p>

                    {/* Primary CTA */}
                    <a
                        href="mailto:your.email@example.com"
                        className="
                inline-flex items-center gap-2
                px-8 py-4 rounded-full
                bg-white text-indigo-600 font-semibold
                hover:scale-105 transition
              "
                    >
                        📩 Email Me
                    </a>

                    {/* Divider */}
                    <div className="my-8 w-full max-w-xs h-px bg-white/30" />

                    {/* Social Links */}
                    <div className="flex gap-6">
                        <a
                            href="#"
                            className="hover:opacity-80 transition"
                            aria-label="LinkedIn"
                        >
                            🔗 LinkedIn
                        </a>
                        <a
                            href="#"
                            className="hover:opacity-80 transition"
                            aria-label="GitHub"
                        >
                            💻 GitHub
                        </a>
                        <a
                            href="#"
                            className="hover:opacity-80 transition"
                            aria-label="Twitter"
                        >
                            🧠 X / Twitter
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Note */}
            <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
                Prefer async? Drop a message — I usually reply within a day.
            </p>
        </section>
    );
};

export default Contact;
