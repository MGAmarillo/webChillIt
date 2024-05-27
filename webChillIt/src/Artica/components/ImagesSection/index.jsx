import './imagesSection.css'

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ImagesSection = () => {
    const image1Ref = useRef(null);
    const image2Ref = useRef(null);
    const image3Ref = useRef(null);
    const image4Ref = useRef(null);

    useEffect(() => {
        if (image1Ref.current) {
            const scaleValue = window.innerWidth < 600 ? 0.9 : 1;
            gsap.fromTo(
                image1Ref.current,
                { scale: 0 },
                {
                    scale: scaleValue,
                    duration: 1,
                    scrollTrigger: {
                        trigger: image1Ref.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (image2Ref.current) {
            const scaleValue = window.innerWidth < 600 ? 0.9 : 1;
            gsap.fromTo(
                image2Ref.current,
                { scale: 0 },
                {
                    scale: scaleValue,
                    duration: 1,
                    scrollTrigger: {
                        trigger: image2Ref.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (image3Ref.current) {
            const scaleValue = window.innerWidth < 600 ? 0.9 : 1;
            gsap.fromTo(
                image3Ref.current,
                { scale: 0 },
                {
                    scale: scaleValue,
                    duration: 1,
                    scrollTrigger: {
                        trigger: image3Ref.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (image4Ref.current) {
            const scaleValue = window.innerWidth < 600 ? 0.9 : 1;
            gsap.fromTo(
                image4Ref.current,
                { scale: 0 },
                {
                    scale: scaleValue,
                    duration: 1,
                    scrollTrigger: {
                        trigger: image4Ref.current,
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
            <div className='containerImages'>
                
                <div ref={image1Ref} className='containerImages1'>
                    <div className='containerImages1_image1'>
                    </div>
                    <div className='containerImages1_image2'>
                    </div>
                </div>

                <div ref={image2Ref} className='containerImages2'>
                    <div className='containerImages2_image1'>
                    </div>
                    <div className='containerImages2_image2'>
                    </div>
                </div>

                <div ref={image3Ref} className='containerImages3'>
                    <div className='containerImages3_image1'>
                    </div>
                    <div className='containerImages3_image2'>
                    </div>
                </div>

                <div ref={image4Ref} className='containerImages4'>
                    <div className='containerImages4_image1'>
                    </div>
                    <div className='containerImages4_image2'>
                    </div>
                </div>

            </div>
        </>
    );
}