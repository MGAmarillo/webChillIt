import './jobsOffer.css'

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/all';
import { InertiaPlugin } from 'gsap/InertiaPlugin';


gsap.registerPlugin(Draggable);
gsap.registerPlugin(InertiaPlugin);

export const JobsOffers = () => {

    const JobsOffersContainer = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(Draggable, InertiaPlugin);
        Draggable.create(JobsOffersContainer.current, {
            type: "x", 
            inertia: true,
            bounds: {
                minX: 0,
                maxX: window.innerWidth < 600 ? -1580 : -1210 // Ajusta estos valores según tus necesidades
            }
        });
    }, []);

    return(
        <>
        <div className='JobsOffers_container'>
        <p className='JobsOffers_container_text'>Ready to become a Chiller? <span className='JobsOffers_container_desktop_break'></span>Join us!</p>
        <div ref={JobsOffersContainer} className='JobsOffers_container_jobs'>
            <div className='JobsOffers_container_jobs_card'>

            </div>

            <div className='JobsOffers_container_jobs_card'>

            </div>

            <div className='JobsOffers_container_jobs_card'>

            </div>

            <div className='JobsOffers_container_jobs_card'>

            </div>

            <div className='JobsOffers_container_jobs_card'>

            </div>

            <div className='JobsOffers_container_jobs_card'>

            </div>
        </div>
        </div>
        </>
    )
}