import './footer.css'

import instagram from './assets/instagram.png'
import twitter from './assets/twitter.png'
import linkedin from './assets/linkedin.png'
import youtube from './assets/youtube.png'

export const Footer = () => {
    return(
        <>
        <div className='footerContainer'>
            <div className='footerContainer_section1'>
            <a href=""><p className='footerContainer_section1_text'>Cookies Policy</p></a>
            <a href=""><p className='footerContainer_section1_text'>Privacy Policy</p></a>
            <a href=""><p className='footerContainer_section1_text'>Terms & Conditions</p></a>
            </div>

            
            <div className='footerContainer_section2'>
            <p className='footerContainer_section1_text'>Copyright © 2024 Chill It</p>
            <a href=""><img className='footerContainer_section2_image' src={instagram} alt="" /></a>
            <a href=""><img className='footerContainer_section2_image' src={twitter} alt="" /></a>
            <a href=""><img className='footerContainer_section2_image' src={linkedin} alt="" /></a>
            <a href=""><img className='footerContainer_section2_image'   src={youtube} alt="" /></a>
            </div>
        </div>
        </>
    )
}