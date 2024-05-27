import './home.css';
import gif from './assets/gifChillIt.gif';
import gifMobile from './assets/gifChillItMobile.gif';
import freeze from './assets/freeze.png';
import vector from './assets/tree-vector.png';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export const Home = () => {

    const imageSrc = window.innerWidth < 600 ? gifMobile : gif;

    const mainText = useRef(null);
    const mainText2 = useRef(null);
    const separator = useRef(null);
    const mainText3 = useRef(null);

    const gradientText1 = useRef(null);
    const buddyGradientText1 = useRef(null);
    const buddyGradientText2 = useRef(null);
    const buddyGradientText3 = useRef(null);

    const card1 = useRef(null);
    const card2 = useRef(null);
    const card3 = useRef(null);

    const card4 = useRef(null);
    const card5 = useRef(null);
    const card6 = useRef(null);

    const gradientText2 = useRef(null);
    const gradientText3 = useRef(null);

    const duoInfo1 = useRef(null);
    const duoInfo2 = useRef(null);      

    useEffect(() => {
        const split = new SplitText(mainText.current, {type:"words,chars"});
        const chars = split.chars; //an array of all the divs that wrap each character

        gsap.set(chars, {opacity: 0}); // Set initial opacity to 0
        gsap.set(mainText.current, {perspective: 400});

        gsap.to(chars, {
            duration: 0.8,
            opacity: 1,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scale: 1,
            stagger: 0.1,
            ease: "power3.out"
        });
    }, []);

    useEffect(() => {
        const width = window.innerWidth < 600 ? '80%' : '20%';
    
        gsap.fromTo(separator.current, 
            {width: '0%', opacity: 0}, // initial state
            {
                duration: 0.8,
                width: width, // final state
                opacity: 1,
                delay:1,
                ease: "power3.out"
            }
        );
    }, []);

    
    useEffect(() => {
        const split = new SplitText(mainText2.current, {type:"words,chars"});
        const chars = split.chars; //an array of all the divs that wrap each character

        gsap.fromTo(chars, 
            {y: -20, opacity: 0}, // initial state
            {
                duration: 0.8,
                y: 0, // final state
                opacity: 1,
                stagger: 0.01,
                delay: 0.5,
                ease: "power3.out"
            }
        );
    }, []);

    useEffect(() => {
        const split = new SplitText(mainText3.current, {type:"words,chars"});
        const chars = split.chars; //an array of all the divs that wrap each character

        gsap.fromTo(chars, 
            {y: -20, opacity: 0}, // initial state
            {
                duration: 0.8,
                y: 0, // final state
                opacity: 1,
                stagger: 0.01,
                delay: 1.5,
                ease: "power3.out"
            }
        );
    }, []);

    useEffect(() => {
        if (gradientText1.current) {
            // Animación para desplazar el texto hacia la derecha cuando se hace scroll hacia abajo
            gsap.fromTo(
                gradientText1.current,
                { x: -1000, filter: 'blur(10px)', opacity: 0 },
                {
                    x: 0,
                    filter: 'blur(0px)',
                    opacity: 1,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: gradientText1.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (buddyGradientText1.current) {
            // Animación para desplazar el texto hacia la derecha cuando se hace scroll hacia abajo
            gsap.fromTo(
                buddyGradientText1.current,
                { filter: 'blur(10px)', opacity: 0 },
                {
                    filter: 'blur(0px)',
                    opacity: 1,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: buddyGradientText1.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (card1.current) {
            gsap.fromTo(
                card1.current,
                { scale: 0 },
                {
                    scale: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: card1.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (card2.current) {
            gsap.fromTo(
                card2.current,
                { scale: 0 },
                {
                    scale: 1,
                    duration: 1,
                    delay: 0.5,
                    scrollTrigger: {
                        trigger: card2.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (card3.current) {
            gsap.fromTo(
                card3.current,
                { scale: 0 },
                {
                    scale: 1,
                    duration: 1,
                    delay: 1,
                    scrollTrigger: {
                        trigger: card3.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (gradientText2.current) {
            // Animación para desplazar el texto hacia la derecha cuando se hace scroll hacia abajo
            gsap.fromTo(
                gradientText2.current,
                { x: 100, filter: 'blur(10px)', opacity: 0 },
                {
                    x: 0,
                    filter: 'blur(0px)',
                    opacity: 1,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: gradientText2.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (gradientText3.current) {
            // Animación para desplazar el texto hacia la derecha cuando se hace scroll hacia abajo
            gsap.fromTo(
                gradientText3.current,
                { x: 200, filter: 'blur(10px)', opacity: 0 },
                {
                    x: 0,
                    filter: 'blur(0px)',
                    opacity: 0.2,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: gradientText3.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (buddyGradientText2.current) {
            // Animación para desplazar el texto hacia la derecha cuando se hace scroll hacia abajo
            gsap.fromTo(
                buddyGradientText2.current,
                { filter: 'blur(10px)', opacity: 0 },
                {
                    filter: 'blur(0px)',
                    opacity: 1,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: buddyGradientText2.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (buddyGradientText3.current) {
            // Animación para desplazar el texto hacia la derecha cuando se hace scroll hacia abajo
            gsap.fromTo(
                buddyGradientText3.current,
                { filter: 'blur(10px)', opacity: 0 },
                {
                    filter: 'blur(0px)',
                    opacity: 1,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: buddyGradientText3.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (card4.current) {
            gsap.fromTo(
                card4.current,
                { scale: 0 },
                {
                    scale: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: card4.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (card5.current) {
            gsap.fromTo(
                card5.current,
                { scale: 0 },
                {
                    scale: 1,
                    duration: 1,
                    delay: 0.5,
                    scrollTrigger: {
                        trigger: card5.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (card6.current) {
            gsap.fromTo(
                card6.current,
                { scale: 0 },
                {
                    scale: 1,
                    duration: 1,
                    delay: 1,
                    scrollTrigger: {
                        trigger: card6.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (duoInfo1.current) {
            // Animación para desplazar el texto hacia la derecha cuando se hace scroll hacia abajo
            gsap.fromTo(
                duoInfo1.current,
                { x: -1000, filter: 'blur(10px)', opacity: 0 },
                {
                    x: 0,
                    filter: 'blur(0px)',
                    opacity: 1,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: duoInfo1.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (duoInfo2.current) {
            // Animación para desplazar el texto hacia la derecha cuando se hace scroll hacia abajo
            gsap.fromTo(
                duoInfo2.current,
                { x: 1000, filter: 'blur(10px)', opacity: 0 },
                {
                    x: 0,
                    filter: 'blur(0px)',
                    opacity: 1,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: duoInfo2.current,
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
        <img className='gifImage' src={imageSrc} alt="" />
        <div className='mainText'>
            <h1 ref={mainText}>We are <span className="mobile-break"> </span>Chill it</h1>
            <h2 ref={mainText2}>The fastest groundbreaking <br/> cooling technology</h2>
            <div ref={separator} className='separator'></div>
            <h3 ref={mainText3}>A real solution for the cooling needs <br/> of consumers, brands and channels! </h3>
        </div>
        <div className='sectionText'>
            <p ref={gradientText1} className='sectionText1'>A new <span className="mobile-break"> </span>  sustainable <span className="desktop-break"> </span> <span className="mobile-break"> </span>cold is born. </p>
            <p ref={buddyGradientText1} className='sectionText2'>Your drink at the best serving <span className="mobile-break2"></span> temperature in seconds</p>
        </div>
        <div className='containerFather'>
            <div ref={card1} className='containerChild1'>
                <img className='freeze' src={freeze} alt="" />
                <p className='containerText1'>Chill it <span className="desktop-break"></span>on demand</p>
                <p className='containerText2'>Chill your drinks <span className="desktop-break-card"></span> in seconds</p>
            </div>
            <div ref={card2} className='containerChild2'>
            <img className='freeze' src={freeze} alt="" />
            <p className='containerText1'>Chill it <span className="desktop-break"></span>as you like</p>
            <p className='containerText2'>Choose your <span className="desktop-break-card"></span> temperature</p>    
            </div>
            <div ref={card3} className='containerChild3'>
            <img className='freeze' src={freeze} alt="" />
            <p className='containerText1'>Chill it <span className="desktop-break"></span>sustainably</p>
            <p className='containerText2'>Reduce carbon <span className="desktop-break-card"></span> footprint</p>    
            </div>
        </div>
        <div className='textContainer'>
            <p ref={gradientText2} className='textContainer_text'><span className="lightFont">Chill it came to</span> revolutionize<span className="mobile-break3"> the refrigeration industry</span></p>
        </div>
        <div className='machine'>
            <div className='machineContainer'>
                <p className='machineText1'>Our Product: <span className='machineText1Bold'>ARTICA</span></p>
                <p className='machineText2'>Extra cold <span className="desktop-break"></span> <span className="mobile-break"></span>drinks in<span className="desktop-break"></span><span className="mobile-break"></span>seconds</p>
                <p className='machineText3'>Artica reduces the temperature of a<span className="desktop-break2"></span> beverage from 25°C <span className="lightFont">(77°F)</span> to -1°C <span className="desktop-break2"></span><span className="lightFont">(30°F)</span> in 30 seconds </p>
                <button className='machineButton'>Features</button>
            </div>
        </div>
        <div className='chillThePlanet'>
            <p ref={gradientText3} className='chillThePlanet_text'>Chill the planet</p>
        </div>
        <div className='whyChillIt'>
            <div className='whyChillIt_textSection1'>
                <p ref={buddyGradientText2} className='whyChillIt_textSection1_text1'>Why is Chill it <span className="mobile-break"></span> the solution?</p>
                <p ref={buddyGradientText3} className='whyChillIt_textSection1_text2'>Commercial refrigeration industry is highly:</p>
            </div>
            <div className='whyChillit_cardSection'>
                <div ref={card4} className='whyChillit_cardSection_1'>
                    <p className='whyChillit_cardSection_text1'>Polluting</p>
                    <p className='whyChillit_cardSection_text2'>Excessive energy consumption leads to high costs, CO2 emissions, and excessive use of polyurethane.</p>
                </div>
                <div ref={card5} className='whyChillit_cardSection_2'>
                    <p className='whyChillit_cardSection_text1'>Inefficient</p>
                    <p className='whyChillit_cardSection_text2'>Traditional coolers take up considerable space at stores, apart from having to work 24/7, requiring berverage refill, and leading to significant energy and time consumption.</p>
                </div>
                <div ref={card6} className='whyChillit_cardSection_3'>
                <p className='whyChillit_cardSection_text1'>Ineffective</p>
                    <p className='whyChillit_cardSection_text2'>Beverages are not at the ideal serving temperature, leading to annual lost sales for the brands and channels.</p>
                </div>
            </div>
            <div className='whyChillit_textSection2'>
                <p className='whyChillit_textSection2_text1'>Our goal is simple: to chill the planet.</p>
                <p className='whyChillit_textSection2_text2'>By replacing traditional commercial coolers<span className="mobile-break2"></span> with Chill it technology, we're not just <span className="desktop-break2"></span> providing a <span className="mobile-break2"></span>cooler beverage – <span className='whyChillit_textSection2_text2Bold'> we're making a <span className="mobile-break2"></span>significant impact on the environment.</span> </p>
                <p className='whyChillit_textSection2_text2'>With Chill it, every chilled beverage<span className="mobile-break2"></span> represents a step towards a greener future.</p>
            </div>
            <div className='whyChillit_duoinfo'>
                <div ref={duoInfo1} className='whyChillit_duoinfo_info1'>
                    <div>
                    <p className='whyChillit_duoinfo_info1_text1'>Here's how:</p>
                    <p className='whyChillit_duoinfo_info1_text2'>Reduced Carbon<span className="mobile-break4"></span>Footprint</p>
                    <p className='whyChillit_duoinfo_info1_text3'>According to the United Nations,<span className="mobile-break5"></span><span className="whyChillit_duoinfo_info1_text3_bold"> refrigeration<span className="desktop-break2"></span> accounts for 7 to 8%*<span className="mobile-break5"></span> of global carbon footprint</span></p>
                    <p className='whyChillit_duoinfo_info1_text4'>*This percentage represents a significant portion of the<span className="mobile-break5"></span> 1%<span className="desktop-break2"></span> of carbon emissions caused by human activity. </p>
                    </div>
                </div>
                <div ref={duoInfo2} className='whyChillit_duoinfo_info2'>
                    <p className='whyChillit_duoinfo_info2_text1'>By upgrading coolers, we contribute <span className="desktop-break2"></span>to preserving vast forests<span className="desktop-break2"></span> and combating deforestation in critical<span className="desktop-break2"></span> ecosystems. </p>
                </div>
            </div>
            <div className='whyChilit-treeInfo'>
                <img src={vector} alt="" />
                <p className='whyChilit-treeInfo_text1'>Join us in our mission<span className="mobile-break6"></span> to chill the planet.</p>
                <p className='whyChilit-treeInfo_text2'>Together, we can make a difference, one chilled drink at a time.</p>
            </div>
            <div className='endlessChillIt'>
            <p className='endlessChillIt_text'>With Chill it,<span className="mobile-break7"></span> possibilities<span className="mobile-break7"></span> <span className="desktop-break2"></span> are endless </p>
        </div>
        </div>
        </>
    );
}