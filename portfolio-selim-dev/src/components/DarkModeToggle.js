
import React, { useState } from 'react';
import '../styles/components/DarkModeToggle.css'; // Assurez-vous d'avoir un fichier CSS correspondant avec les styles

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    const pageElements = document.querySelectorAll('.page_about, .page_contact, .page_project, .page_skills, .home');
    pageElements.forEach((pageElement) => {
      pageElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    });

  };

  return (
    <div className="dark-mode-toggle">
      <input
        type="checkbox"
        id="darkModeToggle"
        checked={darkMode}
        onChange={handleToggle}
      />
      <label htmlFor="darkModeToggle"></label>
    </div>
  );
}

export default DarkModeToggle;

/*
  const LightMode = () => {
    const setLightMode = () => {
      document.querySelector('home').setAttribute('data-theme' , 'light')
    }

    const setDarkMode = () => {
      document.querySelector('home').setAttribute('data-theme' , 'dark')
    }

    setLightMode();
  }*/