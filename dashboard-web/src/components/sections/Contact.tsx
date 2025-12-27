const Contact: React.FC = () => {
    return (
        <section
            id="contact"
            className="py-28 max-w-6xl mx-auto px-6"
        >
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Let’s Connect
                </h2>
                <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
                    I enjoy conversations around frontend architecture, scalable React systems,
                    mentoring developers, and building products that last.
                </p>
            </div>

            {/* Contact Card */}
            <div
                className="
            relative p-10 md:p-14 rounded-3xl
            bg-gradient-to-br
            from-indigo-50 via-white to-purple-50
            dark:from-indigo-900 dark:via-indigo-950 dark:to-purple-900
            text-gray-900 dark:text-white
            shadow-xl dark:shadow-2xl
            border border-indigo-100 dark:border-indigo-800/40
            overflow-hidden
          "
            >
                {/* Glow */}
                <div
                    className="
              absolute inset-0 -z-10 blur-3xl
              bg-indigo-200/40
              dark:bg-indigo-600/20
            "
                />

                <div className="flex flex-col items-center text-center">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                        Start a Meaningful Conversation
                    </h3>

                    <p className="text-gray-700 dark:text-indigo-100 max-w-xl mb-8 leading-relaxed">
                        Whether you’re hiring a senior frontend engineer, exploring micro-frontend
                        architecture, or looking for mentorship — I’m always open to thoughtful discussions.
                    </p>

                    {/* Primary CTA */}
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=vishalmali06@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            inline-flex items-center gap-2
                            px-8 py-4 rounded-full font-semibold
                            bg-indigo-600 text-white
                            hover:bg-indigo-700 hover:scale-105 hover:shadow-lg
                            dark:bg-white dark:text-indigo-700
                            dark:hover:bg-indigo-50
                            transition
                        "
                    >
                        📩 Get in Touch
                    </a>


                    {/* Secondary Info */}
                    <p className="mt-4 text-sm text-gray-600 dark:text-indigo-200">
                        Open to full-time roles, consulting, and mentoring
                    </p>

                    {/* Divider */}
                    <div className="my-10 w-full max-w-sm h-px bg-indigo-200/60 dark:bg-white/20" />

                    {/* Social Links */}
                    <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
                        <a
                            href="https://www.linkedin.com/in/vishal-mali/"
                            className="
                  flex items-center gap-2
                  text-indigo-700 hover:text-indigo-900
                  dark:text-indigo-200 dark:hover:text-white
                  transition
                "
                            aria-label="LinkedIn"
                        >
                            🔗 LinkedIn
                        </a>

                        <a
                            href="https://github.com/vishalmali06"
                            className="
                  flex items-center gap-2
                  text-indigo-700 hover:text-indigo-900
                  dark:text-indigo-200 dark:hover:text-white
                  transition
                "
                            aria-label="GitHub"
                        >
                            💻 GitHub
                        </a>

                        <a
                            href="https://x.com/vishalmali06"
                            className="
                  flex items-center gap-2
                  text-indigo-700 hover:text-indigo-900
                  dark:text-indigo-200 dark:hover:text-white
                  transition
                "
                            aria-label="Twitter"
                        >
                            🧠 X / Twitter
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Note */}
            <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
                Prefer async communication? Drop a message — I usually respond within 24 hours.
            </p>
        </section>
    );
};

export default Contact;
