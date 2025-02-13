// AboutSection.js
import React from 'react';
import styles from './AboutSection.module.css';
import coverPhoto from '../assets/cover-photo.jpg'; 
import Button from './Button';
import SectionTitle from './SectionTitle';

const AboutSection = () => {
    return (
        <section className={styles.about} id="about">
            <div className={styles.title}>
                <SectionTitle title="About Me" />
            </div>
            <div className={styles.content}>
                <div className={styles.colLeft}>
                    <div className={styles.imageDiv}>
                        <img className={styles.image} src={coverPhoto} alt="Cindy's photo" />
                    </div>       
                </div>
                <div className={styles.colRight}>
                    <h2 className={styles.contentTitle}>Welcome to my Portfolio :)</h2>
                    <p className={styles.paragraph}>I am a seasoned web developer, machine learning engineer, and cybersecurity analyst with a fervent passion for technology and a commitment to continuous learning. <br /> I thrive as a collaborative team leader and player, dedicated to working with like-minded individuals who share a passion for their craft.</p>
                    <Button href="https://drive.google.com/file/d/1mgI6u4kSG0xyFjW6B7gJaDcj6ppm_YqU/view?usp=sharing" target="_blank">Download CV</Button>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
