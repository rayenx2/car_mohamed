import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
    badge?: string;
    defaultOpen?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
    title,
    children,
    icon,
    badge,
    defaultOpen = false
}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                aria-expanded={isOpen}
                aria-label={`Toggle ${title}`}
            >
                <div className="flex items-center gap-4 flex-1">
                    {icon && (
                        <div className="flex-shrink-0 text-2xl">
                            {icon}
                        </div>
                    )}
                    <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap">
                            {badge && (
                                <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded">
                                    {badge}
                                </span>
                            )}
                            <h3 className="text-lg font-bold text-gray-900">
                                {title}
                            </h3>
                        </div>
                    </div>
                </div>
                <FaChevronDown
                    className={`text-gray-500 transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''
                        }`}
                />
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;
