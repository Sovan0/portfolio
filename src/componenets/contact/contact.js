import React, { useRef as UseRef, useState as UseState } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

const contact = () => {

    const form = UseRef();

    const [done, setDone] = UseState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_n88zsh8', 'template_i3eu1fi', form.current, 'xP5o6cRpdBTcLc2OH')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className="contact-form" id="contact">
        <div className="w-left">
            <div className="awesome">
                <span>Get in touch</span>
                <span>Contact me</span>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className="user" placeholder="Name" />
                <input type="email" name="user_email" className="user" placeholder="Email" />
                <textarea name="message" className="user" placeholder="Message"/>
                <input type="submit" value="Send" className="button"/>
                <span style={{color: 'white'}}>{done && "Thanks for contacting me"}</span>
            </form>
        </div>
    </div>
  )
}

export default contact