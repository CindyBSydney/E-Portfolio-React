import React from 'react';
import styles from './ServicesSection.module.css';
import SectionTitle from './SectionTitle';

const ServicesSection = () => {
    return (
        <section className={styles.services} id="services">
            <div className={styles.title}>
                <SectionTitle title="Services" />
                <p className={styles.servicesContent}>Proficient in various programming languages and frameworks, I offer the following services:</p>
            </div>
            <div className={styles.content}>
                <div className={styles.card}>
                    <div className={styles.serviceIcon}>
                        <i className="fas fa-robot"></i>
                    </div>
                    <div className={styles.info}>
                        <h3>Data Analysis</h3>
                        <p className={styles.servicesContent}>Experienced in performing analysis of Mathematical and Biological data using Python and R, with expertise in utilizing Machine Learning models for enhanced results.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.serviceIcon}>
                        <i className="fas fa-palette"></i>
                    </div>
                    <div className={styles.info}>
                        <h3>Website Design</h3>
                        <p className={styles.servicesContent}>Skilled in website design using Figma. Various wireframe designs can be made and tailored to your liking.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.serviceIcon}>
                        <i className="fas fa-file-code"></i>
                    </div>
                    <div className={styles.info}>
                        <h3>Website Development</h3>
                        <p className={styles.servicesContent}>Capable of developing websites with a strong foundation in HTML, CSS, and JavaScript for the frontend, coupled with PHP for robust backend functionality.</p>
                    </div>
                </div>
            </div>    
        </section>
    );
};

export default ServicesSection;
