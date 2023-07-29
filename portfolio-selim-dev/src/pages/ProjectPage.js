// Import des fichiers CSS et des données nécessaires
import '../styles/pages/ProjectPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function ProjectPage() {
    return (
        <div className='page_project'>
            {/* Inclusion du composant Header */}
            <Header />

            <div className='all_under_header'>

                <h1>Projets</h1>
                <div className='all_card'>
                    <div className='card_content'>

                        <div className='card_project'>
                            <div className='inside_card_project'>
                                <h2>Kasa</h2>
                                <p> Site de location immobiliere ...</p>
                                <h3>Technology</h3>
                                <p>JavaScript, React</p>
                                <button><a href=''>Demo</a></button>
                            </div>
                        </div>

                        <div className='card_project'>

                            <div className='inside_card_project'>
                                <h2>Piquante</h2>
                                <p> Site mise en vente de sauce piquante ..</p>
                                <h3> Technology</h3>
                                <p></p>
                                <button><a href=''>Demo</a></button>

                            </div>

                        </div>

                        <div className='card_project'>
                            <div className='inside_card_project'>
                                <h2>Kanap</h2>
                                <p> Site de vente de canapés</p>
                                <h3> Technology</h3>
                                <p></p>
                                <button><a href=''>Demo</a></button>

                            </div>

                        </div>

                        <div className='card_project'>

                            <div className='inside_card_project'>
                                <h2>Booki</h2>
                                <p> Site  ...</p>
                                <h3> Technology</h3>
                                <p></p>
                                <button><a href=''>Demo</a></button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Inclusion du composant Footer */}
            <Footer />
        </div>

    )
}