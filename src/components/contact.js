import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import twitter   from './images/twitter.png';
import facebook  from './images/facebook.png';
import linkedin  from './images/linkedin.png';
import instagram from './images/instagram.png';

const SOCIALS = [
  { href: 'https://x.com/AdityaKoda',                                    src: twitter,   alt: 'Twitter'   },
  { href: 'https://www.facebook.com/aditya.mahi.509/',                   src: facebook,  alt: 'Facebook'  },
  { href: 'https://www.linkedin.com/in/aditya-vardhan-koda-057b992b7/',  src: linkedin,  alt: 'LinkedIn'  },
  { href: 'https://www.instagram.com/aditya_koda/',                      src: instagram, alt: 'Instagram' },
];

export const Contact = () => {
  const form = useRef();
  const [status, setStatus]   = useState(null);   // null | 'sending' | 'success' | 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs
      .sendForm('service_57qsvm5', 'template_qgquk1m', form.current, 'wMfiSObcmUm_JFU7s')
      .then(
        () => {
          setStatus('success');
          form.current.reset();
          setTimeout(() => setStatus(null), 4000);
        },
        () => {
          setStatus('error');
          setTimeout(() => setStatus(null), 4000);
        }
      );
  };

  useEffect(() => {
    if (document.querySelector('script[src="/finisher-header.es5.min.js"]')) {
      if (window.FinisherHeader) initFinisher();
      return;
    }
    const script = document.createElement('script');
    script.src = '/finisher-header.es5.min.js';
    script.async = true;
    script.onload = initFinisher;
    document.body.appendChild(script);
  }, []);

  function initFinisher() {
    new window.FinisherHeader({
      count: 20,
      size: { min: 2, max: 40, pulse: 0 },
      speed: { x: { min: 0, max: 0.8 }, y: { min: 0, max: 0.2 } },
      colors: {
        background: '#27282e',
        particles: ['#ff926b', '#87ddfe', '#acaaff', '#1bffc2', '#f9a5fe'],
      },
      blending: 'none',
      opacity: { center: 1, edge: 1 },
      skew: -1,
      shapes: ['c', 's', 't'],
    });
  }

  return (
    <section className="container8">
      <div className="finisher-header" />

      <div className="main_container">

        {/* ── LEFT ── */}
        <div className="left_container">
          <div className="top_container">
            <h2>Contact <span>Me</span></h2>
          </div>

          <p className="contact-tagline">
            Have a project in mind or just want to say hi?
            Drop me a message and I'll get back to you soon.
          </p>

          <div className="icons-container">
            {SOCIALS.map(({ href, src, alt }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="share-icon"
                title={alt}
              >
                <img src={src} alt={alt} />
              </a>
            ))}
          </div>
        </div>

        {/* ── RIGHT – FORM ── */}
        <form className="right_container" ref={form} onSubmit={sendEmail}>
          <h2>Let's Work Together</h2>

          <div className="message">
            {/* Name row */}
            <div className="name-row">
              <input type="text"  name="user_name"     placeholder="First Name" required />
              <input type="text"  name="user_lastname"  placeholder="Last Name"  required />
            </div>

            <input type="email" name="user_email" placeholder="Email Address" required />
            <textarea name="message" placeholder="Tell me about your project…" required />
          </div>

          {/* Status feedback */}
          {status === 'success' && (
            <p className="form-status success">✓ Message sent! I'll be in touch soon.</p>
          )}
          {status === 'error' && (
            <p className="form-status error">✕ Something went wrong. Please try again.</p>
          )}

          <button
            type="submit"
            className="submit-btn"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
