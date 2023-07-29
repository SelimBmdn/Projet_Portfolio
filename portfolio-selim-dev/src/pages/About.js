// Import des fichiers CSS et des données nécessaires
import '../styles/pages/About.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Image2 from '../assets/anm2.png';

export default function About() {
    return (
        <div className='page_about'>
            {/* Inclusion du composant Header */}
            <Header />

            <div className='all_text_img_background'>

                <div className='just_text_and_phone'>
                    <h2> A propos </h2>

                    <h3>Je suis Devellopeur FrontEnd</h3>

                    <p>"Bonjour ! Je suis un développeur front-end junior avec une expertise solide en HTML, CSS et JavaScript, je transforme des concepts et des maquettes en sites web attrayants et fonctionnels. Je suis spécialisé dans l'utilisation de frameworks tels que React, Angular et Vue.js pour créer des applications web réactives et dynamiques. Je suis également attentif à la conception responsive et à l'accessibilité, afin de m'assurer que mes sites s'adaptent à tous les appareils et sont accessibles à tous les utilisateurs ."</p>

                    <button className='download_cv'>
                        Telecherger mon CV
                    </button>

                    <div className='phone_and_mail'>
                        <div className='card'>
                            <div className='inside_card'>
                                <div className='icone'> </div>
                                <div className='text'> Phone</div>
                                <div className='textornumber'> 0661012739 </div>
                            </div>
                        </div>

                        <div className='card'>
                            <div className='inside_card'>
                                <div className='icone'> </div>
                                <div className='text'> Gmail </div>
                                <div className='textornumber'> selim.boumedien@gmail.com </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='image_page_about'>
                    <img src={Image2} alt='' />
                </div>
            </div>
            {/* Inclusion du composant Footer */}
            <Footer />
        </div>
    )
}
