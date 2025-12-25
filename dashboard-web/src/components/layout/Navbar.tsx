import ThemeToggle from './ThemeToggle';

const links: string[] = [
    'Journey',
    'Experience',
    'Mindset',
    'Projects',
    'Teaching',
    'Now',
    'Contact',
];

const Navbar: React.FC = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b dark:border-gray-700">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
                <span className="font-bold">Vishal Mali</span>

                <div className="hidden md:flex gap-6">
                    {links.map(link => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="hover:underline"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
