// Import des fichiers CSS et des données nécessaires
import '../styles/pages/About.css';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default function About() {
	return (
        <div className='page_about'>
            {/* Inclusion du composant Header */}
			<Header />
        </div>	
	)
}
