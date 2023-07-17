// Import des fichiers CSS et des données nécessaires
import '../styles/pages/ContactPage.css';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default function ContactPage() {
	return (
        <div className='page_contact'>
            {/* Inclusion du composant Header */}
			<Header />
        </div>
	
	)
}