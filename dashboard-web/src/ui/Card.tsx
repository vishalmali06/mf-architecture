import type { ReactNode } from "react";


interface CardProps {
    children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div className="p-6 rounded-xl border dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            {children}
        </div>
    );
};

export default Card;
