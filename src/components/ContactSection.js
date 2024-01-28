import React from 'react';
import styles from './ContactSection.module.css'; 
import SectionTitle from './SectionTitle';
import Button from './Button';

const ContactSection = () => {
    return (
        <section className={styles.contact} id="contact">
            <div className={styles.title}>
                <SectionTitle title="Contact" />
            </div>
            <div className={styles.content}>

                <div className={styles.row}>
                    {/*email*/}
                    <div className={styles.card}>
                        <div className={styles.contactIcon}>
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className={styles.info}>
                            <h3>Email</h3>
                            <p className={styles.servicesContent}>bosibori.sydney@gmail.com</p>
                        </div>   
                    </div>
                    {/*phone*/}
                    <div className={styles.card}>
                        <div className={styles.contactIcon}>
                            <i className="fas fa-phone"></i>
                        </div>
                        <div className={styles.info}>
                            <h3>Phone</h3>
                            <p className={styles.servicesContent}>+254 715 712 137</p> 
                        </div>  
                    </div>
                    {/*location*/}
                    <div className={styles.card}>
                        <div className={styles.contactIcon}>
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className={styles.info}>
                            <h3>Location</h3>
                            <p className={styles.servicesContent}>Nairobi, Kenya</p>
                        </div>   
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.contactForm}>
                        <h3>Message Me Here</h3>
                        <div className={styles.inputBox}>
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className={styles.inputBox}>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className={styles.inputBox}>
                            <textarea rows="5" placeholder="Message"></textarea>
                        </div>
                        <div className={styles.inputBox}>
                        <input type="submit" className={styles.sendButton} value="Send" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
