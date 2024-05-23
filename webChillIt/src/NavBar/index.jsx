import './index.css';
import logo from './assets/logoChillItNavBar.png';
import hamburger from './assets/hamburger.png';
import { useState } from 'react';

export const NavBar = () => {

    const [language, setLanguage] = useState('EN');
    const [isOpen, setIsOpen] = useState(false);
    const [hamburguerIsOpen, setHamburgerIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('Home');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const changeLanguage = () => {
        if(language === 'EN'){
            setLanguage('ES');
        }
        else{
            setLanguage('EN');
        }
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleHamburgerMenu = () => {
        setHamburgerIsOpen(!hamburguerIsOpen);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    
    return (
        <>
            <nav>
                <a className="logoChillIt" href="index.html"><img src={logo} alt=''/></a>
                <ul>
                    <li className={`normalLi ${currentPage === 'Home' ? 'selected' : ''}`} onClick={() => setCurrentPage('Home')}><a href="home.html">Home</a></li>
                    <li className={`normalLi ${currentPage === 'Product' ? 'selected' : ''} ${isOpen ? 'open' : ''}`} onClick={() => {setCurrentPage('Product'); toggleMenu();}}>
                        Product
                        <ul>
                            <li><a href="artica.html">ARTICA</a></li>
                            <li><a href="wine.html">Chill it Wine</a></li>
                            <li><a href="home.html">Chill it Home</a></li>
                        </ul>
                    </li>
                    <li className={`normalLi ${currentPage === 'Why Chill it?' ? 'selected' : ''}`} onClick={() => setCurrentPage('Why Chill it?')}><a href="services.html">Why Chill it?</a></li>
                    <li className={`normalLi ${currentPage === 'About us' ? 'selected' : ''}`} onClick={() => setCurrentPage('About us')}><a href="contact.html">About us</a></li>
                    <li className='contactLi'><a className='contactText' href="contact.html">Contact</a></li>
                    <li className='languageLi' onClick={changeLanguage}>{language}</li>
                </ul>
                <img className={`hamburger ${hamburguerIsOpen ? 'rotate' : 'rotateBack'}`} src={hamburger} alt="" onClick={toggleHamburgerMenu} />
            </nav>
            {modalIsOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <ul className='ulModalMobile'>
                            <li><a href="">Home</a></li>
                            <li><a href="">Product</a></li>
                            <li><a href="">Why Chill it?</a></li>
                            <li><a href="">About us</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">EN</a></li>
                        </ul>       
                    </div>
                </div>
            )}
        </>
    );
}