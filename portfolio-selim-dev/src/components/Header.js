// Import des fichiers CSS et des données nécessaires
import '../styles/Header.css'
import Navbar from '../components/NavBar'

function Header () {

    return (   
        <header className='kasa-header'>
            {/* Affichage du logo du site Kasa */}
            <h1 className='All_title'>
                <div className='SelimDev'>
                    SelimDev
                </div>
                <div className='All_name'>
                    Selim Boumedien
                </div>
               {/* <img src={logo} alt='Logo du site Kasa' />*/}
            </h1>
            {/* Inclusion du composant Navbar */}
           <Navbar />          
        </header>   
    )
}
export default Header