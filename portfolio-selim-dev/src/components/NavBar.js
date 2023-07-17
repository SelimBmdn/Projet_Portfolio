import React, { useState, useEffect } from 'react';
import '../styles/components/NavBar.css';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const [otherPage, setOtherPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Vérification de l'URL pour déterminer si c'est une autre page
    if (location.pathname !== '/' && !location.pathname.startsWith('/Home')) {
      setOtherPage(true);
    }
  }, [location]);

  return (
    <ul className={`nav_list ${otherPage ? 'nav_list_other_page' : ''}`}>
      {/* Lien vers la page d'accueil */}
      <li className='btn-home'>
        <Link to='/Home'>Accueil</Link>
      </li>
      {/* Lien vers la page "À propos" */}
      <li className='btn-about'>
        <Link to='/About'>À propos</Link>
      </li>
      {/* Lien vers la page "Skills" */}
      <li className='btn-skills'>
        <Link to='/SkillsPage'>Skills</Link>
      </li>
      {/* Lien vers la page "Projets" */}
      <li className='btn-project'>
        <Link to='/ProjectPage'>Projets</Link>
      </li>
      {/* Lien vers la page "Contact" */}
      <li className='btn-contact'>
        <Link to='/ContactPage'>Contact</Link>
      </li>
      {/* Lien vers la page "Resume" */}
      <li className='btn-resume'>
        <Link to='/ResumePage'>Resume</Link>
      </li>
    </ul>
  );
}

export default NavBar;