import './home.css';
import gif from './assets/gifChillIt.gif';
import freeze from './assets/freeze.png';

export const Home = () => {
    return(
        <>
        <img className='gifImage' src={gif} alt="" />
        <div className='mainText'>
            <h1>We are <span className="mobile-break"> </span>Chill it</h1>
            <h2>The fastest groundbreaking <br/> cooling technology</h2>
            <div className='separator'></div>
            <h3>A real solution for the cooling needs <br/> of consumers, brands and channels! </h3>
        </div>
        <div className='sectionText'>
            <p className='sectionText1'>A new <span className="mobile-break"> </span>  sustainable <span className="desktop-break"> </span> <span className="mobile-break"> </span>cold is born. </p>
            <p className='sectionText2'>Your drink at the best serving <span className="mobile-break2"></span> temperature in seconds</p>
        </div>
        <div className='containerFather'>
            <div className='containerChild1'>
                <img className='freeze' src={freeze} alt="" />
                <p className='containerText1'>Chill it <span className="desktop-break"></span>on demand</p>
                <p className='containerText2'>Chill your drinks <span className="desktop-break-card"></span> in seconds</p>
            </div>
            <div className='containerChild2'>
            <img className='freeze' src={freeze} alt="" />
            <p className='containerText1'>Chill it <span className="desktop-break"></span>as you like</p>
            <p className='containerText2'>Choose your <span className="desktop-break-card"></span> temperature</p>    
            </div>
            <div className='containerChild3'>
            <img className='freeze' src={freeze} alt="" />
            <p className='containerText1'>Chill it <span className="desktop-break"></span>sustainably</p>
            <p className='containerText2'>Reduce carbon <span className="desktop-break-card"></span> footprint</p>    
            </div>
        </div>
        <div className='textContainer'>
            <p className='textContainer_text'><span className="lightFont">Chill it came to</span> revolutionize<span className="mobile-break3"> the refrigeration industry</span></p>
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
            <p className='chillThePlanet_text'>Chill the planet</p>
        </div>
        <div className='whyChillIt'>
            <div className='whyChillIt_textSection1'>
                <p className='whyChillIt_textSection1_text1'>Why is Chill it <span className="mobile-break"></span> the solution?</p>
                <p className='whyChillIt_textSection1_text2'>Commercial refrigeration industry is highly:</p>
            </div>
            <div className='whyChillit_cardSection'>
                <div className='whyChillit_cardSection_1'>
                    <p className='whyChillit_cardSection_text1'>Polluting</p>
                    <p className='whyChillit_cardSection_text2'>Excessive energy consumption leads to high costs, CO2 emissions, and excessive use of polyurethane.</p>
                </div>
                <div className='whyChillit_cardSection_2'>
                    <p className='whyChillit_cardSection_text1'>Inefficient</p>
                    <p className='whyChillit_cardSection_text2'>Traditional coolers take up considerable space at stores, apart from having to work 24/7, requiring berverage refill, and leading to significant energy and time consumption.</p>
                </div>
                <div className='whyChillit_cardSection_3'>
                <p className='whyChillit_cardSection_text1'>Ineffective</p>
                    <p className='whyChillit_cardSection_text2'>Beverages are not at the ideal serving temperature, leading to annual lost sales for the brands and channels.</p>
                </div>
            </div>
        </div>
        </>
    );
}