// Import des fichiers CSS et des données nécessaires
import '../styles/pages/Home.css';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Image1 from '../assets/background-img-home.jpg'


export default function Home() {
	return (
		<div className='home'>
			{/* Inclusion du composant Header */}
			<Header />
			<div className='backgroung_and_text'>
				<div className='background-home'>
					<img src={Image1} alt='' />
				</div>
				<div className='all_text_home'>

					<div className='hello'>
						Hello,
					</div>

					<div className='my_name_is'>
						Je suis Selim Boumedien
					</div>

					<div className='all_frontend_dev'>
						<div className='un'>
							Un
						</div>
						<div className='frontend_dev'>
							Devellopeur Front end,
						</div>
					</div>

					<div className='hire_me'>
						<Link className='return_contact' to='/ContactPage'>Recrutez-moi</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
