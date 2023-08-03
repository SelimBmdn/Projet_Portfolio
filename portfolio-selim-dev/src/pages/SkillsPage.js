// Import des fichiers CSS et des données nécessaires
import '../styles/pages/SkillsPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5 , faCss3, faNodeJs , faJs} from "@fortawesome/free-brands-svg-icons";

function SkillsPage() {
    return (
        <div className='page_skills'>
            {/* Inclusion du composant Header */}
            <Header />
            <div className='all_and_skills'>

                <div className='title_and_icones'>
                    <h1>Skills</h1>

                    <div className='all_icones'>

                        <FontAwesomeIcon icon={faHtml5} style={{color: "#40e0d0",}} />
                        <FontAwesomeIcon icon={faCss3} style={{color: "#40e0d0",}} />
                        <FontAwesomeIcon icon={faJs} style={{color: "#40e0d0",}} />
                        <FontAwesomeIcon icon={faReact} style={{color: "#40e0d0",}} />
                        <FontAwesomeIcon icon={faNodeJs} style={{color: "#40e0d0",}} />

                    </div>
                </div>

                <div className='skills_prc'>



                    <div className='prc_and_ligneHTML'>
                        <div className='lg_and_prc'>
                            <div className='lg'>HTML</div>
                            <div className='prc'>100%</div>
                        </div>
                        <div className='ligne'>ligne</div>
                    </div>

                    <div className='prc_and_ligneCSS'>
                        <div className='lg_and_prc'>
                            <div className='lg'>CSS</div>
                            <div className='prc'>90%</div>
                        </div>
                        <div className='ligne'>ligne</div>
                    </div>

                    <div className='prc_and_ligneJAVASCRIPT'>
                        <div className='lg_and_prc'>
                            <div className='lg'>JAVASCRIPT</div>
                            <div className='prc'>60%</div>
                        </div>
                        <div className='ligne'>ligne</div>
                    </div>

                    <div className='prc_and_ligneREACTJS'>
                        <div className='lg_and_prc'>
                            <div className='lg'>REACT JS</div>
                            <div className='prc'>60%</div>
                        </div>
                        <div className='ligne'>ligne</div>
                    </div>

                    <div className='prc_and_ligneNODEJS'>
                        <div className='lg_and_prc'>
                            <div className='lg'>NODE JS</div>
                            <div className='prc'>60%</div>
                        </div>
                        <div className='ligne'>ligne</div>
                    </div>
                </div>
            </div>
            {/* Inclusion du composant Footer */}
            <Footer />
        </div>

    )
}

export default SkillsPage
