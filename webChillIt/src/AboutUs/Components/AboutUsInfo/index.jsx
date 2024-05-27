import './aboutUsInfo.css'

import { useEffect, useRef } from 'react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import {OurValues} from '../OurValues/index'

gsap.registerPlugin(ScrollTrigger)

export const AboutUsInfo = () => {

    const AboutUsoInfo_text1 = useRef(null);
    const AboutUsoInfo_text2 = useRef(null);
    const AboutUsoInfo_text3 = useRef(null);
    const AboutUsoInfo_text4 = useRef(null);

    useEffect(() => {
        if (AboutUsoInfo_text1.current) {
            gsap.fromTo(
                AboutUsoInfo_text1.current,
                { filter:blur(10), opacity:0 },
                {
                    filter:blur(0), 
                    opacity:1,
                    scrollTrigger: {
                        trigger: AboutUsoInfo_text1.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (AboutUsoInfo_text2.current) {
            gsap.fromTo(
                AboutUsoInfo_text2.current,
                { filter:blur(10), opacity:0 },
                {
                    filter:blur(0), 
                    opacity:1,
                    scrollTrigger: {
                        trigger: AboutUsoInfo_text2.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (AboutUsoInfo_text3.current) {
            gsap.fromTo(
                AboutUsoInfo_text3.current,
                { filter:blur(10), opacity:0 },
                {
                    filter:blur(0), 
                    opacity:1,
                    scrollTrigger: {
                        trigger: AboutUsoInfo_text3.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (AboutUsoInfo_text4.current) {
            gsap.fromTo(
                AboutUsoInfo_text4.current,
                { filter:blur(10), opacity:0 },
                {
                    filter:blur(0), 
                    opacity:1,
                    scrollTrigger: {
                        trigger: AboutUsoInfo_text4.current,
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
            <div className="AboutUsInfo_container">
            <div className="AboutUsInfo_text_container">
            <p ref={AboutUsoInfo_text1} className='AboutUsInfo_text1'>About Us</p>
            <p ref={AboutUsoInfo_text2} className='AboutUsInfo_text2'>At Chill It, we're driven by the belief that <span className='AboutUs_break_mobile'></span> businesses must make a meaningful <span className='AboutUs_break_mobile'></span> impact beyond mere success.</p>
            <p ref={AboutUsoInfo_text3} className='AboutUsInfo_text2'>Our mission? To disrupt the status quo <span className='AboutUs_break_mobile'></span> with innovative solutions that enhance <span className='AboutUs_break_mobile'></span> lives while honoring our environmental <span className='AboutUs_break'></span> commitments. Fueled by an entrepreneurial<span className='AboutUs_break_mobile'></span> spirit, we push boundaries, reshape <span className='AboutUs_break_mobile'></span> industries, and set new standards—<span className='AboutUs_break'></span><span className='AboutUs_break_mobile'></span>all while leaving a lasting positive<span className='AboutUs_break_mobile'></span> mark on our planet. </p>
            <p ref={AboutUsoInfo_text4} className='AboutUsInfo_text2'>Our journey began with a vision to<span className='AboutUs_break_mobile'></span> revolutionize traditional refrigeration<span className='AboutUs_break_mobile'></span> methods. Through relentless innovation<span className='AboutUs_break_mobile'></span><span className='AboutUs_break'></span> and collaboration, we've developed a<span className='AboutUs_break_mobile'></span> groundbreaking technology that cools<span className='AboutUs_break_mobile'></span> beverages on demand, reducing <span className='AboutUs_break'></span> energy consumption and waste. </p>
            </div>
            <OurValues />
            </div>
        </>
    )
}