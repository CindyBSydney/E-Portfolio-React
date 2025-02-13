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
                    <h4 className={styles.contentTitle}>Software Developer</h4>
                    <h4>Risk Africa Innovatis Limited</h4>
                    <h6 className={styles.heading6}>Nairobi, Kenya | 2024 - Present</h6>
                    <h5 className={styles.paragraph}>Revamp the company's old ERM systems using Next.js and Tailwind CSS. </h5>
                </div>
                <div className={styles.experienceCard}>
                    <h4 className={styles.contentTitle}>Project Manager</h4>
                    <h4>Triumf Health</h4>
                    <h6 className={styles.heading6}>Tallinn, Estonia | 2024</h6>
                    <h5 className={styles.paragraph}>Led the development of a mini game to help children learn about mental health.</h5>
                </div>
                <div className={styles.experienceCard}>
                    <h4 className={styles.contentTitle}>Machine Learning Engineer</h4>
                    <h4>Naivas Foodmarket</h4>
                    <h6 className={styles.heading6}>Nairobi, Kenya | 2023 - 2024</h6>
                    <h5 className={styles.paragraph}>Generated actionable insights using Machine learning from customer data</h5>
                </div>
                <div className={styles.experienceCard}>
                    <h4 className={styles.contentTitle}>Software Engineering Intern</h4>
                    <h4>AMT Africa</h4>
                    <h6 className={styles.heading6}>Nairobi, Kenya | 2023</h6>
                    <h5 className={styles.paragraph}>Developed facial recognition and road-sign reader systems, labeled 6000 images.</h5>
                </div>
                
            </div>
        </section>
    );
};

export default ExperienceSection;
