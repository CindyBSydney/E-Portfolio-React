import React, { useState, useEffect } from 'react';
import styles from './ProjectsSection.module.css';
import SectionTitle from './SectionTitle';
import Button from './Button';
import helpingHandsImage from '../assets/helping-hands.png'; 
import gastroHubImage from '../assets/gastrohub2.jpg'; 
import gastricCancerImage from '../assets/gastric-cancer.png'; 
import philanthroLinkImage from '../assets/philanthro-link.png';

const ProjectsSection = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.github.com/users/CindyBSydney/repos');
                const data = await response.json();
                const repoNames = ['Helping-Hands', 'Gastro-Hub', 'Gastric-Cancer-MSI-H-Detection'];
                const filteredData = data.filter(repo => repoNames.includes(repo.name));
                setRepos(filteredData);
            } catch (error) {
                console.error('Error fetching GitHub data:', error);
            }
        };

        fetchData();
    }, []);

    // Map repo data to project information
    const projectsInfo = [
        { name: 'Helping Hands', image: helpingHandsImage, repoName: 'Helping-Hands' },
        { name: 'Philanthro-Link', image: philanthroLinkImage, repoName: 'philanthro-link' },
        { name: 'Gastric Cancer MSI-H Detection', image: gastricCancerImage, repoName: 'Gastric-Cancer-MSI-H-Detection' },
    ];

    const projects = projectsInfo.map(project => {
        const repo = repos.find(r => r.name === project.repoName);
        const description = repo ? repo.description : "Loading...";
        return { ...project, description };
    });

    return (
        <section className={styles.projects} id="projects">
            <div className={styles.title}>
                <SectionTitle title="Projects" />
            </div>
            <div className={styles.content}>
                {projects.map((project, index) => (
                    <div className={styles.card} key={index}>
                        <div className={styles.cardImg}>
                            <img src={project.image} alt={`${project.name} project`} />
                        </div>
                        <div className={styles.info}>
                            <h3 className={styles.infoContent}>{project.name}</h3>
                            <p className={styles.servicesContent}>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.content}>
                <Button href="https://github.com/CindyBSydney" target="_blank"> See More Projects</Button>
            </div>
        </section>
    );
};

export default ProjectsSection;

