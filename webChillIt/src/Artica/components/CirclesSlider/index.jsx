import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/all';
import './circlesSlider.css';
import { InertiaPlugin } from 'gsap/InertiaPlugin';

gsap.registerPlugin(InertiaPlugin);

gsap.registerPlugin(Draggable);

gsap.registerPlugin(ScrollTrigger);

export const CirclesSlider = () => {
    const [circles, setCircles] = useState([
        { text1Visible: true, text2Visible: true, text3Visible: false, prevTextVisible: null },
        { text1Visible: true, text2Visible: true, text3Visible: false, prevTextVisible: null },
        { text1Visible: true, text2Visible: true, text3Visible: false, prevTextVisible: null },
        { text1Visible: true, text2Visible: true, text3Visible: false, prevTextVisible: null },
        { text1Visible: true, text2Visible: true, text3Visible: false, prevTextVisible: null },
        { text1Visible: true, text2Visible: true, text3Visible: false, prevTextVisible: null },
        { text1Visible: true, text2Visible: true, text3Visible: false, prevTextVisible: null },
        { text1Visible: true, text2Visible: true, text3Visible: false, prevTextVisible: null },
    ]);

    const circleRefs = useRef([]);

    let textRef = useRef(null);
    
    circleRefs.current = new Array(circles.length).fill(null);

    useEffect(() => {
        if (textRef.current) {
            // Animación para desplazar el texto hacia la derecha cuando se hace scroll hacia abajo
            gsap.fromTo(
                textRef.current,
                { x: -500 },
                {
                    x: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

   
    useEffect(() => {
        circleRefs.current.forEach((ref, index) => {
            if (ref) {
                Draggable.create(ref, { 
                    type: "x,y", 
                    edgeResistance: 0.65, 
                    bounds: ".circlesContainer",
                    inertia: true 
                });
            }
        });
    }, []);

    const handleClick = (circleNum) => {
        const circle = circles[circleNum - 1];

        if (circle.text3Visible) {
            gsap.to(`.circle${circleNum}_text3`, { opacity: 0, duration: 0.5, onComplete: () => {
                setCircles(prevCircles => {
                    const newCircles = [...prevCircles];
                    newCircles[circleNum - 1] = { ...circle, text3Visible: false, text1Visible: true, text2Visible: true };
                    return newCircles;
                });
                gsap.fromTo(`.circle${circleNum}_text3`, { opacity: 0 }, { opacity: 1, duration: 0.5 }); // Fade in for text3
            }});
        } else if (circle.text1Visible || circle.text2Visible) {
            const tl = gsap.timeline();

            if (circle.text1Visible) {
                tl.to(`.circle${circleNum}_text1`, { opacity: 0, duration: 0.5 });
                setCircles(prevCircles => {
                    const newCircles = [...prevCircles];
                    newCircles[circleNum - 1] = { ...circle, prevTextVisible: `.circle${circleNum}_text1` };
                    return newCircles;
                });
            }
            if (circle.text2Visible) {
                tl.to(`.circle${circleNum}_text2`, { opacity: 0, duration: 0.5 }, '-=0.5');
                setCircles(prevCircles => {
                    const newCircles = [...prevCircles];
                    newCircles[circleNum - 1] = { ...circle, prevTextVisible: `.circle${circleNum}_text2` };
                    return newCircles;
                });
            }

            tl.eventCallback("onComplete", () => {
                setCircles(prevCircles => {
                    const newCircles = [...prevCircles];
                    newCircles[circleNum - 1] = { ...circle, text1Visible: false, text2Visible: false, text3Visible: true };
                    return newCircles;
                });
                gsap.fromTo(`.circle${circleNum}_text3`, { opacity: 0 }, { opacity: 1, duration: 0.5 }); // Fade in for text3
            });
        }
    };
    return (
        <div className="circlesContainer">
            <p className="circlesContainer_text1" ref={textRef}>Artica's impact</p>
            <div className="circlesContainer2">

            <div className="circle4" onClick={() => handleClick(4)} ref={el => circleRefs.current[3] = el}>
                {circles[3].text1Visible && <p className="circle4_text1">saves<span className='desktop-Break2'></span><span className='gradient'> 60% </span></p>}
                {circles[3].text2Visible && <p className="circle4_text2">of energy</p>}
                {circles[3].text3Visible && <p className="circle4_text3">
                <span className='fontBold'>More efficient</span> than a  <span className='desktop-Break'></span> commercial refrigerator  <span className='desktop-Break'></span> thanks to its  <span className='fontBold'>on-demand  <span className='desktop-Break'></span> consumption.</span>
                <span className='moreInfo'><span className='desktop-Break3'></span>(ONU Medioambiente, 2019) </span>
            </p>}
            </div>
                
                
                <div className="circle1" onClick={() => handleClick(1)} ref={el => circleRefs.current[0] = el}>
                    {circles[0].text1Visible && <p className="circle1_text1">taste</p>}
                    {circles[0].text2Visible && <p className="circle1_text2">improvement</p>}
                    {circles[0].text3Visible && <p className="circle1_text3">
                        Chill it enhances the taste <span className='desktop-Break'></span> of beverages by rapidly <span className='desktop-Break'></span> cooling them to the ideal <span className='desktop-Break'></span> serving temperature,<span className='desktop-Break'></span> ensuring that every sip <span className='desktop-Break'></span> is as refreshing and <span className='desktop-Break'></span> enjoyable as possible.
                    </p>}
                </div>
                
                <div className="circle2" onClick={() => handleClick(2)} ref={el => circleRefs.current[1] = el}>
                    {circles[1].text1Visible && <p className="circle2_text1">Ideal <span className='desktop-Break2'></span> temperature</p>}
                    {circles[1].text2Visible && <p className="circle2_text2">in seconds</p>}
                    {circles[1].text3Visible && <p className="circle2_text3">
                    Provides the ideal <span className='fontBold'> <span className='desktop-Break'></span> temperature for each <span className='desktop-Break'></span> drink in less than 1 minute, </span> <span className='desktop-Break'></span> allowing you to choose <span className='desktop-Break'></span> between cold 3°C (37°F) <span className='desktop-Break'></span> and extra cold, -1°C (30°F) 
                    </p>}
                </div>

                <div className="circle3" onClick={() => handleClick(3)} ref={el => circleRefs.current[2] = el}>
                    {circles[2].text1Visible && <p className="circle3_text1">WOW</p>}
                    {circles[2].text2Visible && <p className="circle3_text2">experience</p>}
                    {circles[2].text3Visible && <p className="circle3_text3">It's an innovative and convenient solution that <span className='fontBold'>transforms your refreshment experience.</span></p>}
                </div>

                </div>

                <div className="circlesContainer2">

                    <div className="circle5" onClick={() => handleClick(5)} ref={el => circleRefs.current[4] = el}>
                        {circles[4].text1Visible && <p className="circle5_text1">uses<span className='desktop-Break2'></span><span className='gradient'> 80% </span></p>}
                        {circles[4].text2Visible && <p className="circle5_text2">less expanded <span className='desktop-Break4'></span> polyurethane</p>}
                        {circles[4].text3Visible && <p className="circle5_text3">
                       We achieve  <span className='fontBold'> significant<span className='desktop-Break'></span> savings in material and  <span className='desktop-Break'></span> environmental impact  <span className='desktop-Break'></span> compared </span> to a  <span className='desktop-Break'></span> single-door cooler. 
                    </p>}
                    </div>
    
    
                    <div className="circle6" onClick={() => handleClick(6)} ref={el => circleRefs.current[5] = el}>
                        {circles[5].text1Visible && <p className="circle6_text1">Competitive</p>}
                        {circles[5].text2Visible && <p className="circle6_text2">Advantage</p>}
                        {circles[5].text3Visible && <p className="circle6_text3">
                        Artica's ability to <span className='desktop-Break'></span>  <span className='fontBold'>recognize the EAN</span> of the <span className='desktop-Break'></span> beverage it's chilling allows <span className='desktop-Break'></span> us to  <span className='fontBold'>selectively exclude <span className='desktop-Break'></span> products from chilling,</span> <span className='desktop-Break'></span> thereby enhancing the <span className='desktop-Break'></span> visibility and promotion <span className='desktop-Break'></span> of the desired ones. 
                        </p>}
                    </div>
    
                    <div className="circle7" onClick={() => handleClick(7)} ref={el => circleRefs.current[6] = el}>
                        {circles[6].text1Visible && <p className="circle7_text1">Enhanced</p>}
                        {circles[6].text2Visible && <p className="circle7_text2">Conectivity</p>}
                        {circles[6].text3Visible && <p className="circle7_text3">
                        It offers <span className='fontBold'>integrated <span className='desktop-Break'></span> connectivity services,</span> <span className='desktop-Break'></span> providing real-time market <span className='desktop-Break'></span> data and allowing remote <span className='desktop-Break'></span> software updates and <span className='desktop-Break'></span> monitoring alarms.    
                        </p>}
                    </div>

                    <div className="circle8" onClick={() => handleClick(8)} ref={el => circleRefs.current[7] = el}>
                        {circles[7].text1Visible && <p className="circle8_text1">Allows</p>}
                        {circles[7].text2Visible && <p className="circle8_text2">Cans & PET <span className='desktop-Break5'></span> bottles</p>}
                        {circles[7].text3Visible && <p className="circle8_text3">Chill it caters from<span className='desktop-Break'></span> standard cans to <span className='desktop-Break'></span> polyethylene terephthalate <span className='desktop-Break'></span> (PET) bottles up to 600 cc.<span className='desktop-Break'></span> Our cooling times range<span className='desktop-Break'></span> from 20” to 30” for cans<span className='desktop-Break'></span> and 45” to 60” for PET<span className='desktop-Break'></span> bottles. </p>}
                    </div>

    
</div>
        </div>
    );
};