import React from 'react';
import styles from './FooterSection.module.css'; // Import CSS module

const FooterSection = () => {
    return (
        <footer className={styles.footer} id="footer">
            <span className={styles.footerHeading}>Cindy Bosibori</span>
            <p>Copyright @2025. All Rights Reserved.</p>
        </footer>
    );
};

export default FooterSection;
