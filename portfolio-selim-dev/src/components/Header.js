import React, { useState, useEffect } from 'react';
import '../styles/components/Header.css';
import PhotoProfil from '../assets/PhotoProfile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin , faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/NavBar';

function Header() {
  const [otherPage, setOtherPage] = useState(false);

  useEffect(() => {
    // Vérification de l'URL pour déterminer si c'est une autre page
    const currentURL = window.location.pathname;
    if (currentURL !== '/' && currentURL !== '/Home' ) {
      setOtherPage(true);
    }
  }, []);

  return (
    <header className={`SelimDev-header ${otherPage ? 'SelimDev-header-other-page' : ''}`}>
      {/* Affichage du logo du site*/}
      <div className='all_item_header'>
      <h1 className='All_title'>
        <div className='all_SelimDev'>
          <div className='Selim'>Selim</div>
          <div className='dev'>Dev</div>
        </div>
        <div className='All_name'>Selim Boumedien</div>
      </h1>
      
    <div className='profil_picture'>
      <img src={PhotoProfil} alt='' />
    </div>

      {/* Inclusion du composant Navbar */}
      <Navbar />

      <div className='follow_me'>
        Suivez-moi :
        <div className='linkedin_logo'>
          <a href='https://fr.linkedin.com/in/sboumedien'>
        <FontAwesomeIcon icon={faLinkedin} style={{color: "#40e0d0",}} />
        </a>
        </div>

        <div className='github'>
        <a href='https://github.com/SelimBmdn'>
        <FontAwesomeIcon icon={faGithub} style={{color: "#40e0d0",}} />
        </a>
        </div>

        <div className='gmail'>
          <a href="mailto:selim.boumedien@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
      </div>
    </header>
  );
}

export default Header;