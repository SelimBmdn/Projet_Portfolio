// Import des fichiers CSS et des données nécessaires
import '../styles/pages/SkillsPage.css';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default function SkillsPage() {
    return (
        <div className='page_skills'>
            {/* Inclusion du composant Header */}
            <Header />
            <div className='all_and_skills'>

                <div className='title_and_icones'>
                    <h1>Skills</h1>
                    <div className='all_icones'>

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
        </div>

    )
}