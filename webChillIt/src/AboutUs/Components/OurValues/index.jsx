import './OurValues.css';

import {useEffect, useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

import idea from '../../assets/idea.png'
import group from '../../assets/group.png'
import book from '../../assets/book.png'
import deal from '../../assets/deal.png'
import plant from '../../assets/plant.png'
import target from '../../assets/target.png'

gsap.registerPlugin(ScrollTrigger);

export const OurValues = () => {

    const principalText = useRef(null);
    const value1 = useRef(null);
    const value2 = useRef(null);
    const value3 = useRef(null);
    const value4 = useRef(null);
    const value5 = useRef(null);
    const value6 = useRef(null);

    useEffect(() => {
        if (principalText.current) {
            gsap.fromTo(
                principalText.current,
                { filter:blur(10), opacity:0 },
                {
                    filter:blur(0), 
                    opacity:1,
                    scrollTrigger: {
                        trigger: principalText.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (value1.current) {
            gsap.fromTo(
                value1.current,
                { filter:blur(10), opacity:0, scale:0 },
                {
                    filter:blur(0), 
                    opacity:1,
                    scale:1,
                    scrollTrigger: {
                        trigger: value1.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (value2.current) {
            gsap.fromTo(
                value2.current,
                { filter:blur(10), opacity:0, scale:0 },
                {
                    filter:blur(0), 
                    opacity:1,
                    scale:1,
                    delay: 0.5,
                    scrollTrigger: {
                        trigger: value2.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (value3.current) {
            gsap.fromTo(
                value3.current,
                { filter:blur(10), opacity:0, scale:0 },
                {
                    filter:blur(0), 
                    opacity:1,
                    scale:1,
                    delay: 1,
                    scrollTrigger: {
                        trigger: value3.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (value4.current) {
            gsap.fromTo(
                value4.current,
                { filter:blur(10), opacity:0, scale:0 },
                {
                    filter:blur(0), 
                    opacity:1,
                    scale:1,
                    delay: 1.5,
                    scrollTrigger: {
                        trigger: value4.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (value5.current) {
            gsap.fromTo(
                value5.current,
                { filter:blur(10), opacity:0, scale:0 },
                {
                    filter:blur(0), 
                    opacity:1,
                    scale:1,
                    delay: 2,
                    scrollTrigger: {
                        trigger: value5.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (value6.current) {
            gsap.fromTo(
                value6.current,
                { filter:blur(10), opacity:0, scale:0 },
                {
                    filter:blur(0), 
                    opacity:1,
                    scale:1,
                    delay: 2.5,
                    scrollTrigger: {
                        trigger: value6.current,
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
            <div className="ourValues_container">
                <p ref={principalText} className="ourValues_text">Our Values</p>
                <div className="ourValues_values_container">
                    <div ref={value1} className="ourValues_theValue_container">
                        <img className='ourVales_theValue_image' src={idea} alt="" />
                        <p className='ourValues_text2'>Innovation</p>
                    </div>
                    <div ref={value2} className="ourValues_theValue_container">
                        <img className='ourVales_theValue_image' src={group} alt="" />
                        <p className='ourValues_text2'>Collaboration</p>
                    </div>
                    <div ref={value3} className="ourValues_theValue_container">
                        <img className='ourVales_theValue_image' src={book} alt="" />
                        <p className='ourValues_text2'>Learning</p>
                    </div>
                    <div ref={value4} className="ourValues_theValue_container">
                        <img className='ourVales_theValue_image' src={deal} alt="" />
                        <p className='ourValues_text2'>Resourcefulness</p>
                    </div>
                    <div ref={value5} className="ourValues_theValue_container">
                        <img className='ourVales_theValue_image' src={plant} alt="" />
                        <p className='ourValues_text2'>Care</p>
                    </div>
                    <div ref={value6} className="ourValues_theValue_container">
                        <img className='ourVales_theValue_image' src={target} alt="" />
                        <p className='ourValues_text2'>Authenticity</p>
                    </div>
                </div>
            </div>
        </>
    );
}