import React from 'react';
import './App.css'; 
import MainSection from './components/MainSection'; 
import NavbarSection from './components/NavbarSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ServicesSection from './components/ServicesSection'; 
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="App">
      <MainSection /> {/* Render MainSection component */}
      <NavbarSection /> {/* Render NavbarSection component */}
      <AboutSection /> {/* Render AboutSection component */}
      <ExperienceSection /> {/* Render ExperienceSection component */}
      <ServicesSection /> {/* Render ServicesSection component */}
      <ProjectsSection /> {/* Render ProjectsSection component */}
      <ContactSection /> {/* Render ContactSection component */}
    </div>
  );
}

export default App;
