// Import des fichiers CSS et des données nécessaires
import '../styles/pages/ProjectPage.css';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default function ProjectPage() {
	return (
        <div className='page_project'>
            {/* Inclusion du composant Header */}
			<Header />
        </div>
	
	)
}