import '../styles/components/Footer.css';
import LightMode from '../components/LightMode';


function Footer() {
    
    return (
    <footer className='all_page_footer'>
        <div className='all_inside_footer'>
        <p>Copyright Selim @2023</p>
        </div>
        <div className='lightmode_button'>
        <LightMode />
        </div>
    </footer>
    )
}
  
  
  export default Footer;