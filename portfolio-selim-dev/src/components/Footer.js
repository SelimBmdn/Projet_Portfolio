import '../styles/components/Footer.css';
import DarkModeToggle from './DarkModeToggle';


function Footer() {
    
    return (
    <footer className='all_page_footer'>
        <div className='all_inside_footer'>
        <p>Copyright Selim @2023</p>
        </div>
        <div className='DarkModeToggle_button'>
        <DarkModeToggle />
        </div>
    </footer>
    )
}
  
  
  export default Footer;