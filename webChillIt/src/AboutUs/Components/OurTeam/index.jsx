import './ourTeam.css'
import {useEffect, useRef} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const OurTeam = () => {
    
    let ourTeamContainerText1 = useRef(null);
    let ourTeamContainerText2 = useRef(null);

    useEffect(() => {
        if (ourTeamContainerText1.current) {
            gsap.fromTo(
                ourTeamContainerText1.current,
                { filter:blur(10), opacity:0 },
                {
                    filter:blur(0), 
                    opacity:1,
                    scrollTrigger: {
                        trigger: ourTeamContainerText1.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (ourTeamContainerText2.current) {
            gsap.fromTo(
                ourTeamContainerText2.current,
                { filter:blur(10), opacity:0 },
                {
                    filter:blur(0), 
                    opacity:1,
                    scrollTrigger: {
                        trigger: ourTeamContainerText2.current,
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
        <div className='ourTeamContainer'>
            <div className='ourTeamContainer_text_container'>
            <p ref={ourTeamContainerText1} className='ourTeamContainer_text1'>Our Team</p>
            <p ref={ourTeamContainerText2} className='ourTeamContainer_text2'>We're a dedicated and diverse global team<span className='OurTeamContainer_mobile_break'></span> united by one mission: to take Chill it’s <span className='OurTeamContainer_mobile_break'></span> revolution <span className='OurTeamContainer_desktop_break'></span> to a worldwide scale. We value <span className='OurTeamContainer_mobile_break'></span> diverse perspectives, drawn from varied<span className='OurTeamContainer_mobile_break'></span>  backgrounds and <span className='OurTeamContainer_desktop_break'></span>cultures, as catalysts for<span className='OurTeamContainer_mobile_break'></span> creativity and innovation. Our open<span className='OurTeamContainer_mobile_break'></span> leadership style fosters idea-<span className='OurTeamContainer_desktop_break'></span>sharing and<span className='OurTeamContainer_mobile_break'></span> project development based on merit, not<span className='OurTeamContainer_mobile_break'></span> hierarchy. </p>
            </div>
        </div>
        </>
    )
}
