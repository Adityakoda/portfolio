import React, { useEffect, useState } from 'react';
import './resume.css';
import java   from './images/java.png';
import html   from './images/html.png';
import css    from './images/css.png';
import js     from './images/java-script.png';
import react  from './images/react1.png';
import mysql  from './images/mysql.png';
import python from './images/python.png';
import c      from './images/c.png';

const SKILLS = [
  { src: java,   label: 'Java'       },
  { src: html,   label: 'HTML'       },
  { src: css,    label: 'CSS'        },
  { src: js,     label: 'JavaScript' },
  { src: react,  label: 'React JS'   },
  { src: mysql,  label: 'MySQL'      },
  { src: python, label: 'Python'     },
  { src: c,      label: 'C++'        },
];

export const Resume = () => {
  const [activeTag, setActiveTag] = useState('About me');
  const [contentKey, setContentKey] = useState(0); // triggers re-animation

  useEffect(() => {
    const existing = document.querySelector('script[src="/finisher-header.es5.min.js"]');
    if (existing) {
      // re-init if already loaded
      if (window.FinisherHeader) {
        new window.FinisherHeader({
          count: 20,
          size: { min: 2, max: 40, pulse: 0 },
          speed: { x: { min: 0, max: 0.8 }, y: { min: 0, max: 0.2 } },
          colors: {
            background: "#27282e",
            particles: ["#ff926b", "#87ddfe", "#acaaff", "#1bffc2", "#f9a5fe"]
          },
          blending: "none",
          opacity: { center: 1, edge: 1 },
          skew: -1,
          shapes: ["c", "s", "t"]
        });
      }
      return;
    }

    const script = document.createElement('script');
    script.src = '/finisher-header.es5.min.js';
    script.async = true;
    script.onload = () => {
      new window.FinisherHeader({
        count: 20,
        size: { min: 2, max: 40, pulse: 0 },
        speed: { x: { min: 0, max: 0.8 }, y: { min: 0, max: 0.2 } },
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

  const handleTag = (tag) => {
    setActiveTag(tag);
    setContentKey(k => k + 1); // re-mount content-inner to replay animation
  };

  return (
    <>
      <div className="finisher-header" />

      <main className="resume-page">
        <h2>Why Hire <span>Me?</span></h2>

        <div className="resume-split">
          {/* ── Tag list ── */}
          <ul className="tags">
            {["About me", "Education", "Skills"].map(tag => (
              <li key={tag}>
                <button
                  className={`tag ${activeTag === tag ? 'active' : ''}`}
                  onClick={() => handleTag(tag)}
                >
                  {tag}
                </button>
              </li>
            ))}
          </ul>

          {/* ── Content panel ── */}
          <div className="content">
            <div className="content-inner" key={contentKey}>

              {activeTag === "About me" && (
                <p>
                  Hi, I'm Aditya — a passionate Front-End Developer who loves turning ideas into
                  visually appealing and responsive websites. I specialise in building user-friendly
                  interfaces that not only look great but also deliver smooth, seamless experiences.
                  I work with modern web technologies like HTML, CSS, JavaScript, and React, constantly
                  pushing myself to learn and improve. Feel free to explore my projects and reach out
                  if you're interested in collaborating!
                </p>
              )}

              {activeTag === "Education" && (
                <ul className="education-list">
                  <li>
                    <strong>Keshav Memorial Institute Of Technology</strong>
                    <span className="edu-year">B.Tech · 2021 – 2025</span>
                  </li>
                  <li>
                    <strong>Sri Chaitanya Junior College</strong>
                    <span className="edu-year">Intermediate · 2019 – 2021</span>
                  </li>
                  <li>
                    <strong>Sri Chaitanya School</strong>
                    <span className="edu-year">Secondary · 2018 – 2019</span>
                  </li>
                </ul>
              )}

              {activeTag === "Skills" && (
                <ul className="skill-img">
                  {SKILLS.map(({ src, label }) => (
                    <li key={label} className="skill-item">
                      <img src={src} alt={label} />
                      <h3>{label}</h3>
                    </li>
                  ))}
                </ul>
              )}

            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Resume;
