import React, { useEffect , useRef } from 'react'; 
// import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import twitter from './images/twitter.png';
import facebook from './images/facebook.png';
import google from './images/linkedin.png';
import instagram from './images/instagram.png';

export const Contact = () => {
     const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm('service_57qsvm5', 'template_qgquk1m', form.current, 'wMfiSObcmUm_JFU7s')
        .then(
            () => {
                console.log('SUCCESS!');
                alert('Email sent successfully!');
            },
            (error) => {
                console.log('FAILED...', error.text);
                alert('Failed to send email.');
            }
        );
    };
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/finisher-header.es5.min.js';
        script.async = true;
        script.onload = () => {
          new window.FinisherHeader({
            count: 20,
            size: { min: 2, max: 40, pulse: 0 },
            speed: {
              x: { min: 0, max: 0.8 }, 
              y: { min: 0, max: 0.2 }
            },
            colors: {
              background: "#27282e",
              particles: ["#ff926b", "#87ddfe", "#acaaff", "#1bffc2", "#f9a5fe"]
            },
            blending: "none",
            opacity: { center: 1, edge: 1 },
            skew: -1,
            shapes: ["c", "s", "t"]
          });
        };
        document.body.appendChild(script);
      }, []);
    
  return (
    <section className="container8">
        <div className="finisher-header"></div>
            <div className="main_container">
                <div className="left_container">
                    <div className="top_container">
                        <h2>CONTACT ME</h2>
                    </div>
                    <div className="icons-container">
                        <a href="https://x.com/AdityaKoda" target='blank' rel="noopener noreferrer" className="share-icon">
                            <img src={twitter} alt="Twitter" />
                        </a>
                        <a href="https://www.facebook.com/aditya.mahi.509/" target='blank' rel="noopener noreferrer" className="share-icon">
                            <img src={facebook} alt="Facebook" />
                        </a>
                        <a href="https://www.linkedin.com/in/aditya-vardhan-koda-057b992b7/" target='blank' rel="noopener noreferrer" className="share-icon">
                            <img src={google} alt="Google" />
                        </a>
                        <a href="https://www.instagram.com/aditya_koda/" target='blank' rel="noopener noreferrer" className="share-icon">
                            <img src={instagram} alt="Instagram" />
                        </a>
                    </div>
                </div>
                <form className="right_container" ref={form} onSubmit={sendEmail}> 
                    <h2>Lets Work Together</h2>
                    <div className="message">
                        <input type="text" name="user_name" placeholder="First Name" required />
                        <input type="text" name="user_lastname" placeholder="Last Name" required />
                        <input type="email" name="user_email" placeholder="E-Mail" required />
                        <textarea name="message" placeholder="Type Message Here" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
  )
}
export default Contact;