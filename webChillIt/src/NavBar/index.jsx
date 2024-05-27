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
    const [showSubmenu, setShowSubmenu] = useState(false); // Nuevo estado

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
                    <li className={`normalLi ${currentPage === 'Home' ? 'selected' : ''}`} onClick={() => setCurrentPage('Home')}><a href="/">Home</a></li>
                    <li className={`normalLi ${currentPage === 'Product' ? 'selected' : ''} ${isOpen ? 'open' : ''}`} onClick={() => {setCurrentPage('Product'); toggleMenu();}}>
                        Product
                        <ul>
                            <li><a href="/artica">ARTICA</a></li>
                            <li><a href="/wine">Chill it Wine</a></li>
                            <li><a href="/home">Chill it Home</a></li>
                        </ul>
                    </li>
                    <li className={`normalLi ${currentPage === 'Why Chill it?' ? 'selected' : ''}`} onClick={() => setCurrentPage('Why Chill it?')}><a href="/">Why Chill it?</a></li>
                    <li className={`normalLi ${currentPage === 'About us' ? 'selected' : ''}`} onClick={() => setCurrentPage('About us')}><a href="/about_us">About us</a></li>
                    <li className='contactLi'><a className='contactText' href="/contact">Contact</a></li>
                    <li className='languageLi' onClick={changeLanguage}>{language}</li>
                </ul>
                <img className={`hamburger ${hamburguerIsOpen ? 'rotate' : 'rotateBack'}`} src={hamburger} alt="" onClick={toggleHamburgerMenu} />
            </nav>
            {modalIsOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <ul className='ulModalMobile'>
                            <li><a href='/'>Home</a></li>
                            <li onClick={() => setShowSubmenu(!showSubmenu)}>Product</li> {/* Controlador de eventos agregado */}
                            <ul className={showSubmenu ? 'ulModalMobile2' : 'ulModalMobile2 hidden'}> {/* Clase condicional agregada */}
                                <li><a href="/artica">ARTICA</a></li>
                                <li><a href="/wine">Chill it Wine</a></li>
                                <li><a href="/home">Chill it Home</a></li>
                            </ul>
                            <li><a href='/home'>Why Chill it?</a></li>
                            <li><a href='/about_us'>About us</a></li>
                            <li><a href='contact'>Contact</a></li>
                            <li onClick={changeLanguage}>{language}</li>
                        </ul>       
                    </div>
                </div>
            )}
        </>
    );
}