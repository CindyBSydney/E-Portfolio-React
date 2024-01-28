import React from 'react';
import './App.css'; 
import MainSection from './components/MainSection'; 
import NavbarSection from './components/NavbarSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ServicesSection from './components/ServicesSection'; 

function App() {
  return (
    <div className="App">
      <MainSection /> {/* Render MainSection component */}
      <NavbarSection /> {/* Render NavbarSection component */}
      <AboutSection /> {/* Render AboutSection component */}
      <ExperienceSection /> {/* Render ExperienceSection component */}
      <ServicesSection /> {/* Render ServicesSection component */}
    </div>
  );
}

export default App;
