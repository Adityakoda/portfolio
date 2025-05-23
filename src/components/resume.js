import React, { useEffect, useState } from 'react';
import './resume.css';
import java from './images/java.png'
import html from './images/html.png'
import css from './images/css.png'
import js from './images/java-script.png'
import react from './images/react1.png'
import mysql from './images/mysql.png'
import python from './images/python.png'
import c from './images/c.png'
export const Resume = () => {
  const [activeTag, setActiveTag] = useState('About me');

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
    <div className='container'>
      <div className="finisher-header"></div>
      <h2>Why Hire Me?</h2>
      <ul className="tags">
        {["About me", "Education", "Skills"].map(tag => (
          <li key={tag}>
            <button
              className={`tag ${activeTag === tag ? 'active' : ''}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          </li>
        ))}
      </ul>

      <div className="content">
        {activeTag === "About me" && (
          <p>
            Hi, I’m Aditya, a passionate Front-End Developer who loves turning ideas into visually appealing and responsive websites. I specialize in building user-friendly interfaces that not only look great but also provide smooth and seamless user experiences. This portfolio is a collection of my work, skills, and projects that highlight my journey and growth in front-end development. I enjoy working with modern web technologies like HTML, CSS, JavaScript, and frameworks like React, constantly pushing myself to learn and improve. Feel free to explore my projects, learn more about what I do, and reach out if you’re interested in collaborating!
          </p>
        )}
        {activeTag === "Education" && (
          <ul>
            <li><strong>Keshav Memorial Institute Of Technology</strong> <br/>(2021–2025)</li>
            <li><strong>Sri Chaitanya Junior College</strong>  <br/>(2019–2021)</li>
            <li><strong>Sri Chaitanya School</strong> <br/>(2018–2019)</li>
          </ul>
        )}
        {activeTag === "Skills" && (
          <ul className="skill-img">
                    <li>
                        <img src={java} className="img2" alt="linkedin" /><h3>JAVA</h3>
                    </li>
                    <li>
                        <img src={html} className="img2" alt="linkedin" /><h3>HTML</h3>
                    </li>
                    <li>
                       <img src={css} className="img2" alt="linkedin" /><h3>CSS</h3>
                    </li>
                    <li>
                        <img src={js} className="img2" alt="linkedin" /><h3>JAVASCRIPT</h3>
                    </li>
                    <li>
                        <img src={react} className="img2" alt="linkedin" /><h3>REACTJS</h3>
                    </li>
                    <li>
                        <img src={mysql} className="img2" alt="linkedin" /><h3>MYSQL</h3>
                    </li>
                    <li>
                        <img src={python} className="img2" alt="linkedin" /><h3>PYTHON</h3>
                    </li>
                    <li>
                        <img src={c} className="img2" alt="linkedin" /><h3>C++</h3>
                    </li>
                </ul>
        )}
      </div>
    </div>
  );
};

export default Resume;
