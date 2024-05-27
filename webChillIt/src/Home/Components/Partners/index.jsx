import './partners.css'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PartnersBrands } from '../PartnersBrands/index'

gsap.registerPlugin(ScrollTrigger)

export const Partners = () => {

    const partnerText1 = useRef(null);
    const partnerText2 = useRef(null);
    const partnerSeparator = useRef(null);

    useEffect(() => {
        if (partnerText1.current) {
            gsap.fromTo(
                partnerText1.current,
                { filter:blur(10), opacity:0 },
                {
                    filter:blur(0), 
                    opacity:1,
                    scrollTrigger: {
                        trigger: partnerText1.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (partnerText2.current) {
            gsap.fromTo(
                partnerText2.current,
                { filter:blur(10), opacity:0 },
                {
                    filter:blur(0), 
                    opacity:1,
                    scrollTrigger: {
                        trigger: partnerText2.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (partnerSeparator.current) {
            gsap.fromTo(
                partnerSeparator.current,
                { filter:blur(10), opacity:0 },
                {
                    filter:blur(0), 
                    opacity:1,
                    scrollTrigger: {
                        trigger: partnerSeparator.current,
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
        <div className='partner_container'>
            <p ref={partnerText1} className='partner_container_text1'>Are you ready to be part of the change <span className='partner_container_desktop_break'></span> in the beverage industry? </p>
            <p ref={partnerText2} className='partner_container_text2'>Become our partner, distributor, or try the machine in your own business.<span className='partner_container_desktop_break2'></span> <span className='partner_container_text_bold'>Join us for a greener, energy-efficient and customer-satisfying experience!</span></p>
            <span ref={partnerSeparator} className='partner_container_separator'></span>
        </div>
        <PartnersBrands />
        </>
    )
}