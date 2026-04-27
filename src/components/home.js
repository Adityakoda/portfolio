import React, { useEffect } from 'react';
import './home.css';
import pic   from './images/aditya.jpg';
import logo  from './images/linkedin.png';
import logo2 from './images/github.png';
import logo3 from './images/whatsapp.png';
import logo4 from './images/twitter.png';

const SOCIALS = [
  { href: 'https://www.linkedin.com/in/aditya-vardhan-koda-057b992b7/', src: logo,  alt: 'LinkedIn'  },
  { href: 'https://github.com/Adityakoda',                               src: logo2, alt: 'GitHub'    },
  { href: 'https://wa.me/918919415035',                                  src: logo3, alt: 'WhatsApp'  },
  { href: 'https://x.com/AdityaKoda',                                    src: logo4, alt: 'Twitter'   },
];

export const Home = () => {
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
    <div className="home">
      <div className="finisher-header" />

      <header>
        <div className="header__container">

          {/* ── Right: avatar (rendered first in DOM for mobile order) ── */}
          <div className="header__right">
            <div className="avatar-wrap">
              <img src={pic} className="img1" alt="Aditya Koda" />
            </div>
          </div>

          {/* ── Left: text ── */}
          <div className="header__left">
            <h1>Hello, I'm</h1>
            <h2>Aditya Koda</h2>

            <a href="/adi.pdf" download className="download-btn">
              <button>Download CV</button>
            </a>

            <ul className="social__icons">
              {SOCIALS.map(({ href, src, alt }) => (
                <li key={alt}>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <img src={src} alt={alt} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </header>
    </div>
  );
};

export default Home;
