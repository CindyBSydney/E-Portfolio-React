// MainSection.js
import React from 'react';
import styles from './MainSection.module.css'; 
import coverPhoto from '../assets/cover-photo.jpg';

const MainSection = () => {
    return (
        <section className={styles.main} id="main">
            <div className={styles.content}>
                <h2>Hi, my name is<br /><span>Cindy Sydney</span></h2>
                <div className={styles.animatedText}>
                    <h3>Web Developer</h3>
                    <h3>Machine Learning Engineer</h3>
                    <h3>Cybersecurity Analyst</h3>
                </div>       
                <a href="https://github.com/CindyBSydney" target="_blank" className={styles.button}>My projects</a>
                <div className={styles.mediaIcons}>
                    <a href="https://www.linkedin.com/in/cindy-bosibori" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="mailto:bosibori.sydney@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i></a>
                    <a href="https://github.com/CindyBSydney" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                </div>
            </div>
            <div className={styles.imagediv}>
                <img className={styles.image} src={coverPhoto} alt="Cindy's cover photo" />
            </div>
        </section>
    );
};

export default MainSection;