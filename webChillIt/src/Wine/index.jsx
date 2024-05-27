import './wine.css'
import brandChilIt from '../Artica/assets/chillItLogo.png'
import brandWine from '../Artica/assets/wineBrand.png'
import {Link} from 'react-router-dom'
import{useEffect, useRef,} from 'react'
import gsap from 'gsap'


export const Wine = () => {
    
    const comingSoon = useRef(null);
    const logo = useRef(null);
    const brand = useRef(null);

    useEffect(() => {
        gsap.fromTo([comingSoon.current], 
            { x: -200 }, 
            {
                duration: 5,
                x: 200,
                yoyo: true,
                repeat: -1,
                ease: "power1.inOut"
            }
        );
    }, []);

    useEffect(() => {
        gsap.fromTo([brand.current], 
            { scale: 1 }, 
            {
                duration: 5,
                scale:1.1,
                yoyo: true,
                repeat: -1,
                ease: "power1.inOut"
            }
        );
    }, []);

    return(
        <>
            <div className="wineContainer">
                <div className="comingSoonContainer">
                    <p ref={comingSoon} >COMING SOON...</p>
                </div>
                <div className="contentContainer">
                    <img ref={logo} className='logoChillIt' src={brandChilIt} alt="" />
                    <img ref={brand} className='logoWine' src={brandWine} alt="" />
                    <button className='wineButton' onClick={() => {
  window.scrollTo(0, 0);
  ScrollTrigger.refresh();
}}>
  <Link to='/contact' style={{ color: 'inherit', textDecoration: 'inherit'}}>I want one</Link>
</button>
                </div>
            </div>
        </>
    )
}