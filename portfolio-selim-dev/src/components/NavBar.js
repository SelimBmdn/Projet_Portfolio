// Import des fichiers CSS et des données nécessaires
import '../styles/components/NavBar.css'
import { Link } from 'react-router-dom'

function NavBar () {

    return (    
            <ul className='nav_list'>
                {/* Lien vers la page d'accueil */}
                <li className='btn-home'>
                    <Link to='/Home'>
                    Acceuil
                    </Link>
                </li>
                 {/* Lien vers la page "À propos" */}
                <li className='btn-about'>
                    <Link to='/About'>
                    A propos
                    </Link>
                </li>

                 {/* Lien vers la page "À propos" */}
                 <li className='btn-skills'>
                    <Link to='/SkillsPage'>
                    Skills
                    </Link>
                </li>

                 {/* Lien vers la page "À propos" */}
                 <li className='btn-project'>
                    <Link to='/ProjectPage'>
                    Projets
                    </Link>
                </li>

                 {/* Lien vers la page "À propos" */}
                 <li className='btn-contact'>
                    <Link to='/ContactPage'>
                    Contact
                    </Link>
                </li>

                {/* Lien vers la page "À propos" */}
                <li className='btn-resume'>
                    <Link to='/ResumePage'>
                    Resume
                    </Link>
                </li>
            </ul>
    )
}

export default NavBar