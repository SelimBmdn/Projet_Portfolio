// Import des fichiers CSS et des données nécessaires
import '../styles/pages/ContactPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin , faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState, useRef, useEffect } from 'react';
import InputCompenent from '../components/InputCompenent';

export default function ContactPage() {
    return (
        <div className='page_contact'>
            {/* Inclusion du composant Header */}
            <Header />
            <div className='all_page_contact'>

                <div className='all_content'>

                    <div className='all_cards'>
                        <div className='card_contact'>
                            <div className='all_inside_cardcontact'>

                                <div className='fa-icon-contact'>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <div className='how_contact'>
                                    Gmail
                                </div>
                                <div className='mail_contact'>
                                    selim.boumedien@gmail.com
                                </div>
                            </div>
                        </div>

                        <div className='card_contact'>

                            <div className='all_inside_cardcontact'>


                                <div className='fa-icon-contact'>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <div className='how_contact'>
                                    Phone
                                </div>
                                <div className='phone_contact'>
                                    0661012739
                                </div>

                            </div>
                        </div>
                        <div className='card_contact'>

                            <div className='all_inside_cardcontact'>
                                <div className='fa-icon-contact'>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <div className='how_contact'>
                                    Connnectez-vous
                                </div>
                                <div className='all_icon_contact'>

                                <a href="mailto:selim.boumedien@gmail.com">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    </a>

                                    <a href='https://fr.linkedin.com/in/sboumedien'>
                                    <FontAwesomeIcon icon={faLinkedin}  />
                                    </a>

                                    <a href='https://github.com/SelimBmdn'>
                                    <FontAwesomeIcon icon={faGithub}  />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='contact_us'>
                        <div className='title_and_input'>
                        <h1>Contactez-moi ici</h1>

                        <InputCompenent />

                        </div>
                    </div>
                </div>
            </div>
            {/* Inclusion du composant Footer */}
            <Footer />
        </div>

    )
}