import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom"; 
import './nav.css'
export const Nav = () => {
  const navigate = useNavigate();
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
    <div className='home'>
      <nav>
        <div className="container nav__container">
           <h1>Aditya</h1>
          <ul className="nav__menu">
           
            <Link to='/'><li><h3>Home</h3></li></Link>
            <Link to='/resume'><li><h3>Resume</h3></li></Link>
            <Link to='/project'><li><h3>Projects</h3></li></Link> 
            <Link to='/contact'><li><button>Hire Me</button></li></Link>
          </ul>
        </div>
      </nav>
      <div className="finisher-header"></div>
    </div>
  )
}
export default Nav;