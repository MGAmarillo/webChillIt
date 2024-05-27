import './partnersBrands.css'
import circleBrand1 from '../../assets/circleBrand1.png'
import circleBrand2 from '../../assets/circleBrand2.png'
import circleBrand3 from '../../assets/circleBrand3.png'
import circleBrand4 from '../../assets/circleBrand4.png'
import circleBrand5 from '../../assets/circleBrand5.png'
import circleBrand6 from '../../assets/circleBrand6.png'
import circleBrand7 from '../../assets/circleBrand7.png'
import circleBrand8 from '../../assets/circleBrand8.png'

import { useEffect, useRef } from 'react';
import { Draggable } from 'gsap/Draggable';
import { gsap } from 'gsap';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(Draggable, InertiaPlugin, ScrollTrigger);



export const PartnersBrands = () => {

    const dragRef = useRef(null);
    const brandsContainerSection1 = useRef(null);
    const brandsContainerSection2 = useRef(null);

    useEffect(() => {
        Draggable.create(dragRef.current, {
            type: "x",
            inertia: true,
            bounds: {
                minX: 0,
                maxX: window.innerWidth < 600 ? -1020 : -750
            }
        });
    }, []);

    useEffect(() => {
        if (brandsContainerSection1.current) {
            gsap.fromTo(
                brandsContainerSection1.current,
                { filter:blur(10), opacity:0 },
                {
                    filter:blur(0), 
                    opacity:1,
                    scrollTrigger: {
                        trigger: brandsContainerSection1.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (brandsContainerSection2.current) {
            gsap.fromTo(
                brandsContainerSection2.current,
                { filter:blur(10), opacity:0 },
                {
                    filter:blur(0), 
                    opacity:1,
                    scrollTrigger: {
                        trigger: brandsContainerSection2.current,
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
        <div className='partnersBrands_container'>
            <div ref={brandsContainerSection1} className='partnersBrands_container_section1'>
             <p className='partnersBrands_container_section1_text1'>Partners</p>
             <p className='partnersBrands_container_section1_text2'>Already part of the Chill it transformation.</p>
            </div>

            <div ref={brandsContainerSection2} className='partnersBrands_container_section2'>
            <div ref={dragRef}  className='partnersBrands_container_section2_draggeable'>
            <img className='partnersBrands_container_section2_imageBrand' src={circleBrand1} alt="" />
            <img className='partnersBrands_container_section2_imageBrand' src={circleBrand2} alt="" />
            <img className='partnersBrands_container_section2_imageBrand' src={circleBrand3} alt="" />
            <img className='partnersBrands_container_section2_imageBrand' src={circleBrand4} alt="" />
            <img className='partnersBrands_container_section2_imageBrand' src={circleBrand5} alt="" />
            <img className='partnersBrands_container_section2_imageBrand' src={circleBrand6} alt="" />
            <img className='partnersBrands_container_section2_imageBrand' src={circleBrand7} alt="" />
            <img className='partnersBrands_container_section2_imageBrand' src={circleBrand8} alt="" />
            </div>
            </div>
        </div>
        </>
    )
}