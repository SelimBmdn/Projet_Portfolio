// Import des fichiers CSS et des données nécessaires
import '../styles/components/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons' ;
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/NavBar';

function Header() {

    return (
        <header className='SelimDev-header'>
            {/* Affichage du logo du site*/}
            <h1 className='All_title'>
                <div className='all_SelimDev'>
                    <div className='Selim'>
                        Selim
                    </div>
                    <div className='dev'>
                        Dev
                    </div>
                </div>
                <div className='All_name'>
                    Selim Boumedien
                </div>
                {/* <img src={logo} alt='Logo du site Kasa' />*/}
            </h1>
            {/* Inclusion du composant Navbar */}
            <Navbar />

            <div className='follow_me'>
                Suivez-moi :
                <div className='linkedin_logo'>

                </div>

                <div className='github'>
                <FontAwesomeIcon icon={faGithub} />
                </div>

                <div className='gmail'>
                <FontAwesomeIcon icon={faEnvelope} />
                </div>


            </div>
        </header>
    )
}
export default Header