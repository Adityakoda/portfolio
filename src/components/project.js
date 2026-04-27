import React, { useEffect, useState, useCallback } from 'react';
import './project.css';
import illustra from './images/illustra.png';
import brohood  from './images/brohood.png';

const projectList = [
  {
    id: 1,
    title: '3D T-Shirt Designer Store',
    description:
      'Brohood is an interactive e-commerce platform that allows users to design and purchase 3D customisable T-shirts in real-time. Built with React and Three.js, it delivers a modern, immersive shopping experience with dynamic design previews and full creative control over apparel.',
    stack: ['HTML5', 'CSS3', 'Three.js'],
    image: brohood,
    liveLink: 'https://brohood.vercel.app/',
    codeLink: 'https://github.com/Adityakoda/Brohood',
  },
  {
    id: 2,
    title: 'AI Image Generator',
    description:
      'Illustra.ai is an AI-powered image generator that transforms text prompts into high-quality visuals using advanced deep learning models. Built with React and integrated with the Clipdrop API, it enables users to create unique images for art, design, or content creation with just a few words.',
    stack: ['React JS', 'CSS3', 'Gen AI'],
    image: illustra,
    liveLink: 'https://github.com/Adityakoda/illustra',
    codeLink: 'https://github.com/Adityakoda/illustra',
  },
];

export const Project = () => {
  const [current, setCurrent]     = useState(0);
  const [switching, setSwitching] = useState(false);
  const total = projectList.length;

  // Animate on slide switch (separate class from page-load animation)
  const goTo = useCallback((idx) => {
    setSwitching(true);
    setTimeout(() => {
      setCurrent(idx);
      setSwitching(false);
    }, 200);
  }, []);

  const nextProject = useCallback(() => goTo((current + 1) % total), [current, goTo, total]);
  const prevProject = useCallback(() => goTo((current - 1 + total) % total), [current, goTo, total]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') nextProject();
      if (e.key === 'ArrowLeft')  prevProject();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [nextProject, prevProject]);

  // Finisher background
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

  const { title, description, stack, image, liveLink, codeLink } = projectList[current];

  return (
    <div className="project-container">
      <div className="finisher-header" />

      <div className="project-inner">

        {/* LEFT */}
        <div className={`project-left ${switching ? 'switching' : ''}`}>
          <p className="project-counter">
            {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </p>

          <h1 className="project-title">{title}</h1>
          <p className="project-desc">{description}</p>

          <div className="project-stack">
            {stack.map((s) => (
              <span key={s} className="stack-badge">{s}</span>
            ))}
          </div>

          <div className="project-btns">
            <a href={liveLink} target="_blank" rel="noopener noreferrer"
               className="proj-link-btn" title="Live Demo">
              <i className="fas fa-arrow-up-right-from-square" />
            </a>
            <a href={codeLink} target="_blank" rel="noopener noreferrer"
               className="proj-link-btn" title="Source Code">
              <i className="fab fa-github" />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="project-right">
          <div className={`project-img-wrap ${switching ? 'switching' : ''}`}>
            <img src={image} alt={title} />
          </div>

          <div className="project-nav-row">
            <div className="nav-dots">
              {projectList.map((_, i) => (
                <button key={i}
                  className={`nav-dot ${i === current ? 'active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>
            <div className="nav-arrows">
              <button className="nav-btn" onClick={prevProject} aria-label="Previous">
                <i className="fas fa-arrow-left" />
              </button>
              <button className="nav-btn" onClick={nextProject} aria-label="Next">
                <i className="fas fa-arrow-right" />
              </button>
            </div>
          </div>

          <p className="keyboard-hint">← → arrow keys to navigate</p>
        </div>

      </div>
    </div>
  );
};

export default Project;
