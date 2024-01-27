// ExperienceSection.js
import React from 'react';
import styles from './ExperienceSection.module.css'; 
import background from '../assets/background8.png'; 
import SectionTitle from './SectionTitle';

const ExperienceSection = () => {
    return (
        <section className={styles.experience} id="experience" style={{ backgroundImage: `url(${background})` }}>
            <div className={styles.title}>
                <SectionTitle title="Experience" />
            </div>
            <div className={styles.experienceCards}>
                <div className={styles.experienceCard}>
                    <h4 className={styles.contentTitle}>CyberGirl 3.0</h4>
                    <h4>CyberSafe Foundation</h4>
                    <h6 className={styles.heading6}>Remote | 2022 - 2023</h6>
                    <h5 className={styles.paragraph}>Completed practical courses, led cross-country groupwork assignments, joined DevSecOps specialization.</h5>
                </div>
                <div className={styles.experienceCard}>
                    <h4 className={styles.contentTitle}>Software Engineer Intern</h4>
                    <h4>AMT Technologies</h4>
                    <h6 className={styles.heading6}>Nairobi, Kenya | 2023</h6>
                    <h5 className={styles.paragraph}>Developed facial recognition and road-sign reader systems, labeled 6000 images.</h5>
                </div>
                <div className={styles.experienceCard}>
                    <h4 className={styles.contentTitle}>Volunteer</h4>
                    <h4>Kenya National Library Service</h4>
                    <h6 className={styles.heading6}>Nairobi, Kenya | 2022</h6>
                    <h5 className={styles.paragraph}>Reshelved books, assisted patrons, and promoted library programs.</h5>
                </div>
                <div className={styles.experienceCard}>
                    <h4 className={styles.contentTitle}>Bank Teller</h4>
                    <h4>Equity Bank Limited</h4>
                    <h6 className={styles.heading6}>Kajiado, Kenya | 2020</h6>
                    <h5 className={styles.paragraph}>Cashed cheques, reconciled cash, and educated on digital banking.</h5>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
