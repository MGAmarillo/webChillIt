import './mainSlider.css';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

export const MainSlider = () => {

    const text1 = useRef(null);
    const text2 = useRef(null);
    const text3 = useRef(null);
    const articaRef = useRef(null);

    useEffect(() => {
        const splitText1 = new SplitText(text1.current, {type:"words,chars"});
        const splitText3 = new SplitText(text3.current, {type:"words,chars"});

        gsap.from(splitText1.chars, {
            x: -50,
            opacity: 0,
            stagger: 0.05,
        });


        gsap.from(splitText3.chars, {
            x: -50,
            opacity: 0,
            stagger: 0.05,
        });
    }, []);

    return(
        <>
        <div ref={articaRef} className="mainSlider">
            <p ref={text1} className='mainSlider_text1'>ARTICA</p>
            <p ref={text2} className='mainSlider_text2'>The game <span className='desktop_break'></span> <span className='mobile_break'></span>  changer</p>
            <p ref={text3} className='mainSlider_text3'>Extra cold drinks<span className='desktop_break2'></span> in seconds</p>
        </div>
        </>
    )
}