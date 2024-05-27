import './infoSection.css'

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ImagesSection } from '../ImagesSection/index'
import { ChillItAndEnjoy} from '../ChillItAndEnjoy/index'
import { DuoLinks } from '../DuoLinks/index';

gsap.registerPlugin(ScrollTrigger);


export const InfoSection = () => {

    let infoContainer = useRef(null);

    useEffect(() => {
        if (infoContainer.current) {
            // Animación para desplazar el texto hacia la derecha cuando se hace scroll hacia abajo
            gsap.fromTo(
                infoContainer.current,
                { filter: 'blur(10px)', opacity: 0 },
                {
                    filter: 'blur(0px)',
                    opacity: 1,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: infoContainer.current,
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
            <div ref={infoContainer}  className='infoContainer'>
                <p className='infoContainer_text'>We can chill your drink faster than <span className='break'></span>you can read this &#59;&#41;</p>
                <button className='infoContainer_button'>Do you want to join Chill it’s revolution?</button>
                <ImagesSection></ImagesSection>
                <ChillItAndEnjoy></ChillItAndEnjoy>
                <DuoLinks></DuoLinks>
            </div>
        </>
    );
}