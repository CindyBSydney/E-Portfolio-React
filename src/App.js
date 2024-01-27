import React from 'react';
import './App.css'; 
import MainSection from './components/MainSection'; 
import NavbarSection from './components/NavbarSection';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <div className="App">
      <MainSection /> {/* Render MainSection component */}
      <NavbarSection /> {/* Render NavbarSection component */}
      <AboutSection /> {/* Render AboutSection component */}
    </div>
  );
}

export default App;
