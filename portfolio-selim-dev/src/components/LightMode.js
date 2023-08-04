
  import React, { useState } from 'react';
import '../styles/components/LightMode.css'; // Assurez-vous d'avoir un fichier CSS correspondant avec les styles

function LightMode() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
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

export default LightMode;
