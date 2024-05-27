import './contact.css'

import gif from '../Home/assets/gifChillIt.gif'

export const Contact = () => {

    return(
        <>
        <div className='megaContainer'>
        <div className='formContainer'>
            <div className='contact_infoContainer'>
                <p className='contact_infoContainer_text1'>Contact us</p>
                <p className='contact_infoContainer_text2'>Get in touch</p>
                <p className='contact_infoContainer_text3'>We love meeting people <span className='contact-break'></span> who <span className='contact-mobile-break'></span>are interested in <span className='contact-break'></span> becoming a <span className='contact-mobile-break'></span> part of the <span className='contact-break'></span> Chill it revolution.</p>
            </div>
            <form className='dataContainer'>
            <div className='dataText'>
            <div>Name</div>
            <div><input className="inputStyle" type="text" name="name" /></div>
            </div>
            <div className='dataText'>
            <div>Email</div>
            <div><input className="inputStyle" type="email" name="email"/></div>
            </div>
            <div className='dataText'>
            <div>Phone number(optional:)</div>
            <div><input className="inputStyle" type="number" name="phoneNumber"/></div>
            </div>
            <div className='dataText'>
            <div>Country</div>
            <div><input className="inputStyle" type="text" name="country"/></div>
            </div>
            <div className='dataText'>
            <div>Select a reason</div>
            <div><input className="inputStyle" type="text" name="reason"/></div>
            </div>
            <div className='dataText'>
            <div>Message:</div>
            <div><input className="inputStyle" type="text" name="message"/></div>
            </div>
            <div className='containerCheckBox'>
            <input type='checkbox' id='checkbox' className="contact_checkbox_input" />
            <label htmlFor='checkbox'>I accept the terms & conditions</label>
            <span id='customCheckbox'></span>
            </div>
            <div className='containerCheckBox'>
            <input type='checkbox' id='checkbox' className="contact_checkbox_input" />
            <label htmlFor='checkbox'>I accept the Privacy Policy</label>
            <span id='customCheckbox'></span>
            </div>
                <input className='buttonSend' type="submit" value="Send!" />
            </form>
        </div>
        </div>
        <div className='blackCover'></div>
        <img className='gifImage' src={gif} alt="" />
        <div className='background_container'></div>
        </>
    )
}