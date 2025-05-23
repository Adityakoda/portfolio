import React, { useEffect } from 'react'; 
import './home.css';
import pic from './images/aditya.jpg';
import logo from './images/linkedin.png' 
import logo2 from './images/github.png'
import logo3 from './images/whatsapp.png'
import logo4 from './images/twitter.png'
export const Home = () => {
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
    <div className="home">

      <div className="finisher-header"></div>

      <header>
        <div className="header__container">
          <div className="header__left">
            <h1>Hello I'm</h1>
            <h2>Aditya Koda</h2>
            <a href="/resume.pdf" download className="download-btn"><button>Download CV</button></a>
            <ul className="social__icons">
  <li>
    <a href="https://www.linkedin.com/in/aditya-vardhan-koda-057b992b7/" target="_blank" rel="noopener noreferrer">
      <img src={logo} className="img2" alt="linkedin" />
    </a>
  </li>
  <li>
    <a href="https://github.com/Adityakoda" target="_blank" rel="noopener noreferrer"> 
      <img src={logo2} className="img2" alt="github" />
    </a>
  </li>
  <li>
    <a href=" https://wa.me/918919415035" target="_blank" rel="noopener noreferrer">
      <img src={logo3} className="img2" alt="whatsapp" />
    </a>
  </li>
  <li>
    <a href="https://x.com/AdityaKoda" target="_blank" rel="noopener noreferrer">
      <img src={logo4} className="img2" alt="twitter" />
    </a>
  </li>
</ul>

          </div>
          <div className="header__right">
             <img src={pic} className="img1" alt="pic" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
