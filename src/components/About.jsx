import './pages.css'
// import { Link } from 'react-router-dom'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function About() {

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
                <h1>About Me</h1>
            </div>
        </div>

        <div className='about'>
            <div className='left'>
                <h1 className='who-am-i'>Who Am I?</h1>
                <p>As a dedicated Full Stack Software Engineer, I specialize in crafting efficient and user-friendly solutions using JavaScript, Python, Node.js, React.js, and MongoDB. My focus lies in developing scalable front-end and back-end components, along with efficient database management. I'm passionate about staying updated with the latest industry trends and continuously seeking new challenges to refine my skills. I thrive in collaborative settings, effectively communicate with various stakeholders, and consistently deliver projects on time.</p>
                {/* <Link to='/contact'>
                    <button className='btn'>contact</button>
                </Link> */}
            </div>
        </div>
        <div className='skills-title-div'>
            <h1 className='skills-title'>Skills</h1>
        </div>
        <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src="/images/react1.png" className='img' alt='true'/>
                    </div>
                    <div className='img-stack bottom'>
                        <img src="/images/react2.jpeg" className='img' alt='true'/>
                    </div>
                </div>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src="/images/JavaScript-logo.webp" className='img' alt='true'/>
                    </div>
                    <div className='img-stack bottom'>
                        <img src="/images/JavaScript_code.png" className='img' alt='true'/>
                    </div>
                </div>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src="/images/python-logo.png" className='img' alt='true'/>
                    </div>
                    <div className='img-stack bottom'>
                        <img src="/images/python-code.jpeg" className='img' alt='true'/>
                    </div>
                </div>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src="/images/sql-logo.webp" className='img' alt='true'/>
                    </div>
                    <div className='img-stack bottom'>
                        <img src="/images/sql-code.png" className='img' alt='true'/>
                    </div>
                </div>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src="/images/mongo-logo.png" className='img' alt='true'/>
                    </div>
                    <div className='img-stack bottom'>
                        <img src="/images/mongo-code.png" className='img' alt='true'/>
                    </div>
                </div>
            </div>

        <div>

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

        </div>
    )
}