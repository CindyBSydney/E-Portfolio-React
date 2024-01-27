import React from 'react';
import './App.css'; 
import MainSection from './components/MainSection'; 
import NavbarSection from './components/NavbarSection';

function App() {
  return (
    <div className="App">
      <MainSection /> {/* Render MainSection component */}
      <NavbarSection /> {/* Render NavbarSection component */}
    </div>
  );
}

export default App;
