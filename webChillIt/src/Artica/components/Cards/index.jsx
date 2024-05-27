import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import freezeIcon from '../../assets/freeze-icon.png';
import infinityIcon from '../../assets/infinity-icon.png';
import arrowsIcon from '../../assets/arrows-icon.png';
import linesIcon from '../../assets/lines-icon.png';
import './cards.css';

gsap.registerPlugin(ScrollTrigger);

export const Cards = () => {

    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);
    const card4Ref = useRef(null);

    useEffect(() => {
        if (card1Ref.current) {
            const scaleValue = window.innerWidth < 600 ? 0.9 : 1;
            gsap.fromTo(
                card1Ref.current,
                { scale: 0 },
                {
                    scale: scaleValue,
                    duration: 1,
                    scrollTrigger: {
                        trigger: card1Ref.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (card2Ref.current) {
            const scaleValue = window.innerWidth < 600 ? 0.9 : 1;
            gsap.fromTo(
                card2Ref.current,
                { scale: 0 },
                {
                    scale: scaleValue,
                    duration: 1,
                    scrollTrigger: {
                        trigger: card2Ref.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (card3Ref.current) {
            const scaleValue = window.innerWidth < 600 ? 0.9 : 1;
            gsap.fromTo(
                card3Ref.current,
                { scale: 0 },
                {
                    scale: scaleValue,
                    duration: 1,
                    scrollTrigger: {
                        trigger: card3Ref.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (card4Ref.current) {
            const scaleValue = window.innerWidth < 600 ? 0.9 : 1;
            gsap.fromTo(
                card4Ref.current,
                { scale: 0 },
                {
                    scale: scaleValue,
                    duration: 1,
                    scrollTrigger: {
                        trigger: card4Ref.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    return (
        <div className='cardContainer'>
            <div className='card card1' ref={card1Ref}>
                <img className='cardImage' src={freezeIcon} alt="" />
                <p className='card1_text'>Best serving <span className='card1_text_desktop_break'></span> temperature</p>
                <p className='card1_text2'>Ideal temperature for each beverage <span className='card1_text_desktop_break2'></span> in less than a minute</p>
            </div>

            <div className='card card2' ref={card2Ref} >
                <img className='cardImage' src={infinityIcon} alt="" />
                <p className='card1_text'>Unlimited <span className='card1_text_desktop_break'></span> capacity</p>
                <p className='card1_text2'>Capability to cool one drink after another <span className='card1_text_desktop_break2'></span>without compromising performance.</p>
            </div>

            <div className='card card3' ref={card3Ref}>
                <img className='cardImage' src={arrowsIcon} alt="" />
                <p className='card1_text'>Fully <span className='card1_text_desktop_break'></span> customizable</p>
                <p className='card1_text2'>Custom design tailored to match<span className='card1_text_desktop_break2'></span>your brand or business identity.</p>
            </div>

            <div className='card card4'ref={card4Ref} >
                <img className='cardImage' src={linesIcon} alt="" />
                <p className='card1_text'>Exclusive<span className='card1_text_desktop_break'></span>experience</p>
                <p className='card1_text2'>EAN Recognition & connectivity<span className='card1_text_desktop_break2'></span>enable unique cooling experience.</p>
            </div>
        </div>
    );
};
