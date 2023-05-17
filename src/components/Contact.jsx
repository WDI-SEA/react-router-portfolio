import './pages.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

    const form = useRef();
    const [message, setMessage] = useState("")

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setMessage('Your email has been sent!')
      }, (error) => {
          console.log(error.text);
          setMessage("An error occured, please try again.")
      });
    };


    return(
        <div>

        <div className='hero-img'>
            <div className='heading'>
                <h1>Contact</h1>
            </div>
        </div>

        <div className='contact-title-div'>
        <h1 className='contact-title'>I want to hear from you, send me a message!</h1>
        </div>
        <div className='form'>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <button className='btn' type='submit'>Submit</button>
            </form>

        {message && <h3 className='msg'>{message}</h3>}

        </div>

        </div>
    )
}