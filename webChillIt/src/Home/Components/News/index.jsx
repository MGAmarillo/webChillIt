import './news.css'

import { useEffect, useRef } from 'react';
import {gsap} from 'gsap';
import { Draggable } from 'gsap/all';
import { InertiaPlugin } from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';


gsap.registerPlugin(Draggable, InertiaPlugin, ScrollTrigger);

export const News = () => {

    const news_container_draggable = useRef(null);
    const news_container_text = useRef(null);

    useEffect(() => {
        Draggable.create(news_container_draggable.current, {
            type: "x",
            inertia: true,
            bounds: {
                minX: 0,
                maxX: window.innerWidth < 600 ? -1950 : -2150
            }
        });
    }, []);

    useEffect(() => {
        if (news_container_text.current) {
            gsap.fromTo(
                news_container_text.current,
                { filter:blur(10), opacity:0 },
                {
                    filter:blur(0), 
                    opacity:1,
                    scrollTrigger: {
                        trigger: news_container_text.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (news_container_draggable.current) {
            gsap.fromTo(
                news_container_draggable.current,
                { filter:blur(10), opacity:0 },
                {
                    filter:blur(0), 
                    opacity:1,
                    scrollTrigger: {
                        trigger: news_container_draggable.current,
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
        <div className='news_container'>
            <p ref={news_container_text} className='news_container_text'>News</p>
            <div ref={news_container_draggable} className='news_container_draggable'>
            <div className='news_container_card'></div>
            <div className='news_container_card'></div>
            <div className='news_container_card'></div>
            <div className='news_container_card'></div>
            <div className='news_container_card'></div>
            <div className='news_container_card'></div>
            <div className='news_container_card'></div>
            <div className='news_container_card'></div>
            </div>
        </div>
        </>
    )
}