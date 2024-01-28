import React from 'react';
import styles from './ProjectsSection.module.css';
import SectionTitle from './SectionTitle';
import Button from './Button';
import helpingHandsImage from '../assets/helping-hands.png'; 
import gastroHubImage from '../assets/gastrohub2.jpg'; 
import gastricCancerImage from '../assets/gastric-cancer.png'; 

const ProjectsSection = () => {
    return (
        <section className={styles.projects} id="projects">
            <div className={styles.title}>
                <SectionTitle title="Projects" />
            </div>
            <div className={styles.content}>
                {/* Project 1 */}
                <div className={styles.card}>
                    <div className={styles.cardImg}>
                        <img src={helpingHandsImage} alt="Helping Hands project" />
                    </div>
                    <div className={styles.info}>
                        <h3 className={styles.infoContent}>Helping Hands</h3>
                        <p className={styles.servicesContent}>A donation platform created using HTML, CSS, JS and PHP.</p>
                    </div>
                </div>
                {/* Project 2 */}
                <div className={styles.card}>
                    <div className={styles.cardImg}>
                        <img src={gastroHubImage} alt="Gastro Hub Image" />
                    </div>
                    <div className={styles.info}>
                        <h3 className={styles.infoContent}>Gastro Hub Dashboard</h3>
                        <p className={styles.servicesContent}>A medical dashboard created using HTML, CSS and PHP.</p>
                    </div>
                </div>
                {/* Project 3 */}
                <div className={styles.card}>
                    <div className={styles.cardImg}>
                        <img src={gastricCancerImage} alt="Gastric Cancer Detection" />
                    </div>
                    <div className={styles.info}>
                        <h3 className={styles.infoContent}>Gastric cancer Detection</h3>
                        <p className={styles.servicesContent}>Gastric cancer detection model created using Python.</p>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <Button href="https://github.com/CindyBSydney" target="_blank"> See More Projects</Button>
            </div>
        </section>
    );
};

export default ProjectsSection;
