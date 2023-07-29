// Import des fichiers CSS et des données nécessaires
import '../styles/pages/ResumePage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function ResumePage() {
	return (
        <div className='page_resume'>
            {/* Inclusion du composant Header */}
			<Header />

            {/* Inclusion du composant Footer */}
            <Footer />
        </div>
	
	)
}