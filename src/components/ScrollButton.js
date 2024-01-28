import React, { useState, useEffect } from 'react';
import styles from './ScrollButton.module.css'; // Import CSS module

const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`${styles.scroll} ${isVisible ? styles.active : ''}`} onClick={scrollToTop}>
            <i className="fas fa-arrow-up"></i>
        </div>
    );
};

export default ScrollButton;
