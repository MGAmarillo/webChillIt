import './evolution.css'
import { useEffect, useRef } from 'react';
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { gsap } from "gsap";

import evolution1 from '../../assets/evolution1.png'

gsap.registerPlugin(Draggable);
gsap.registerPlugin(InertiaPlugin);


export const Evolution = () => {

    const containerRef = useRef(null);

    const evolutionContainerText = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(Draggable, InertiaPlugin);
        Draggable.create(containerRef.current, {
            type: "x", 
            inertia: true,
            bounds: {
                minX: 0,
                maxX: window.innerWidth < 600 ? -1580 : -600 // Ajusta estos valores según tus necesidades
            }
        });
    }, []);

    useEffect(() => {
        if (evolutionContainerText.current) {
            gsap.fromTo(
                evolutionContainerText.current,
                { filter:blur(10), opacity:0 },
                {
                    filter:blur(0), 
                    opacity:1,
                    scrollTrigger: {
                        trigger: evolutionContainerText.current,
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
        <div className="evolution_container">
            <p ref={evolutionContainerText} className='evolution_container_text'>Key Milestons in <span className='evolution_container_break_mobile'></span> Chill it's Evolution</p>
            <div ref={containerRef} className='evolution_container_cards'>
                <div className='evolution_container_card'>
                <div className='evolution_container_card_image'></div>
                <div className='evolution_container_card_text1'><p>2019</p></div>
                <div className='evolution_container_card_text2'><p>Initial prototype <span className='evolution_container_desktop_break'></span> development and patent <span className='evolution_container_desktop_break'></span> registration process.</p></div>
                </div>
                <div className='evolution_container_card'>
                <div className='evolution_container_card_image2'></div>
                <div className='evolution_container_card_text1'><p>2020</p></div>
                <div className='evolution_container_card_text2'><p>Conducted a roadshow to showcase the technology across Europe and the USA, closing our first partnership deals.</p></div>
                </div>
                <div className='evolution_container_card'>
                <div className='evolution_container_card_image3'></div>
                <div className='evolution_container_card_text1'><p>2021</p></div>
                <div className='evolution_container_card_text2'><p>Development of an improved version of our technology,<span className='evolution_container_desktop_break'></span> ready for marketing and <span className='evolution_container_desktop_break'></span> scale production </p></div>
                </div>
                <div className='evolution_container_card'>
                <div className='evolution_container_card_image4'></div>
                <div className='evolution_container_card_text1'><p>2022</p></div>
                <div className='evolution_container_card_text2'><p> Industrialized the technology in partnership with IMBERA.</p></div>
                </div>
                <div className='evolution_container_card'>
                <div className='evolution_container_card_image5'></div>
                <div className='evolution_container_card_text1'><p>2023</p></div>
                <div className='evolution_container_card_text2'><p> Pilot phase in first markets<span className='evolution_container_desktop_break'></span> with partners.</p></div>
                </div>
                <div className='evolution_container_card'>
                <div className='evolution_container_card_image6'></div>
                <div className='evolution_container_card_text1'><p>2024</p></div>
                <div className='evolution_container_card_text2'><p> Chill it was launched in <span className='evolution_container_desktop_break'></span> global massive markets <span className='evolution_container_desktop_break'></span> for the first time. </p></div>
                </div>
            </div>    
        </div>
        </>
    )
}