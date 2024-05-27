import './duoLinks.css'
import chillItLogo from '../../assets/chillItLogo.png'
import wineBrand from '../../assets/wineBrand.png'
import homeBrand from '../../assets/homeBrand.png'
import {Link} from 'react-router-dom'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const DuoLinks = () => {
    
    const link1 = useRef(null);
    const link2 = useRef(null);

    useEffect(() => {
        if (link1.current) {
            // Animación para desplazar el texto hacia la derecha cuando se hace scroll hacia abajo
            gsap.fromTo(
                link1.current,
                { x: -100, filter: 'blur(10px)', opacity: 0 },
                {
                    x: 0,
                    filter: 'blur(0px)',
                    opacity: 1,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: link1.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (link2.current) {
            // Animación para desplazar el texto hacia la derecha cuando se hace scroll hacia abajo
            gsap.fromTo(
                link2.current,
                { x: 100, filter: 'blur(10px)', opacity: 0 },
                {
                    x: 0,
                    filter: 'blur(0px)',
                    opacity: 1,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: link2.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);


    return(
        <>
            <div className='duoLinksContainer'>
                <div ref={link1} className='link1'>
                    <p className='comingSoon'>Coming soon...</p>
                    <img className='imageLogo' src={chillItLogo} alt="" />
                    <img className='imageBrand' src={wineBrand} alt="" />
                    <button className='duoLinksButton' onClick={() => {
  window.scrollTo(0, 0);
  ScrollTrigger.refresh();
}}>
  <Link to='/wine' style={{ color: 'inherit', textDecoration: 'inherit'}}>I want one</Link>
</button>
                </div>

                <div ref={link2} className='link2'>
                    <p className='comingSoon'>Coming soon...</p>
                    <img className='imageLogo' src={chillItLogo} alt="" />
                    <img className='imageBrand' src={homeBrand} alt="" />
                    <button className='duoLinksButton' onClick={() => {
  window.scrollTo(0, 0);
  ScrollTrigger.refresh();
}}>
  <Link to='/home' style={{ color: 'inherit', textDecoration: 'inherit'}}>I want one</Link>
</button>
                </div>
            </div>
        </>
    )
}