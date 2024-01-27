import React from 'react';
import './Button.css'; 

const Button = ({ children, onClick, href, download, target }) => {
    if (href) {
        return (
            <a 
                href={href} 
                download={download} 
                target={target} 
                rel={target === '_blank' ? 'noopener noreferrer' : undefined} 
                className="button"
            >
                {children}
            </a>
        );
    }
    // Render as a regular button if href is not provided
    return (
        <button onClick={onClick} className="button">
            {children}
        </button>
    );
};

export default Button;
