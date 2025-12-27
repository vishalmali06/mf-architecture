import { useEffect, useState } from 'react';

const BackToTop: React.FC = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const container = document.getElementById("app-content");
        if (!container) return;

        const onScroll = () => {
            setVisible(container.scrollTop > 300);
        };

        container.addEventListener("scroll", onScroll);
        return () => container.removeEventListener("scroll", onScroll);
    }, []);


    const scrollToTop = () => {
        const container = document.getElementById("app-content");

        container?.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    return (
        <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        flex items-center justify-center
        bg-indigo-600 text-white
        shadow-lg
        transition-all duration-300
        hover:scale-110
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}
      `}
        >
            ↑
        </button>
    );
};

export default BackToTop;
