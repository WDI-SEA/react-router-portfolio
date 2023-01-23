import Loader from 'react-loaders';
import './Contact.scss'
import AnimatedLetters from './Animation/AnimatedLetters'
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
        .sendForm(
            'service_e30drm9',
            'template_hwb4lda',
            refForm.current,
            'rI1-t507fnmxRNY3e'
        )
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent!')
            window.location.reload(false)
        }, function(error) {
            console.log('FAILED...', error)
            alert('Message was not sent!')
        })
    }
    return ( 
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                        idx={15}
                        />

                    </h1>
                    <p>
                        Contact me about opportunities within your organization - especially companies looking for a creative and dedicated developer. Don't hesitate to contact me with questions about my projects or experience.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Name" required/>
                            </li>
                            <li className='half'>
                                <input type="text" name="email" placeholder="Email" required/>
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder="Subject" required/>
                            </li>
                            <li>
                                <textarea type="text" name="message" placeholder="Message" required/>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" required/>
                            </li>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
     );
}

export default Contact;