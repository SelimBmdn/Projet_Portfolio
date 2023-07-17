// Import des fichiers CSS et des données nécessaires
import '../styles/pages/SkillsPage.css';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default function SkillsPage() {
	return (
        <div className='page_skills'>
            {/* Inclusion du composant Header */}
			<Header />
        </div>
	
	)
}