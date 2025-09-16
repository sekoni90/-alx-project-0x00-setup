import React from 'react';

interface ButtonProps {
    title: string;
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
}

const Button = ({ title, size = 'medium', shape = 'rounded-md' }: ButtonProps) => {
    let sizeClass = '';
    switch (size) {
        case 'small':
            sizeClass = 'px-2 py-1 text-sm';
            break;
        case 'medium':
            sizeClass = 'px-4 py-2 text-base';
            break;
        case 'large':
            sizeClass = 'px-6 py-3 text-lg';
            break;
    }

    return (
        <button className={`border bg-blue-500 text-white ${sizeClass} ${shape}`}>
            {title}
        </button>
    );
};
export default Button;