import React, { useEffect, useState } from 'react';
import './project.css';
import illustra from './images/illustra.png';
import brohood from './images/brohood.png';
import satyabama from './images/illustra.png';

const projectList = [
  {
    id: 1,
    title: 'AI Image Generator',
    description:
      'Illustra.ai is an AI-powered image generator that transforms text prompts into high-quality visuals using advanced deep learning models. The tool enables users to create unique images for art, design, or content creation with just a few words. Built with React and integrated with the Clipdrop API, it delivers a seamless and interactive user experience.',
    stack: 'Reactjs, CSS3, Gen AI',
    image: illustra,
    liveLink: '#',
    codeLink: '#',
  },
  {
    id: 2,
    title: '3D T-Shirt Designer Store',
    description:
      'Brohood is an interactive e-commerce platform that allows users to design and purchase 3D customizable T-shirts in real-time. Built with React and Three.js, it delivers a modern, immersive shopping experience. The platform supports dynamic design previews, offering users full creative control over their apparel.',
    stack: 'Html5, CSS3, Three.js',
    image: brohood,
    liveLink: '#',
    codeLink: '#',
  },
];

export const Project = () => {
  const [current, setCurrent] = useState(0);
  const total = projectList.length;

  const nextProject = () => setCurrent((prev) => (prev + 1) % total);
  const prevProject = () => setCurrent((prev) => (prev - 1 + total) % total);

  const { title, description, stack, image, liveLink, codeLink } = projectList[current];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/finisher-header.es5.min.js';
    script.async = true;
    script.onload = () => {
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
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="project-container">
      <div className="finisher-header"></div>
      <div className="project-left">
        <h1 className="project-title">0{current + 1}<br />{title}</h1>
        <p className="project-desc">{description}</p>
        <p className="project-stack">{stack}</p>
        <div className="project-btns">
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-arrow-up-right-from-square"></i>
          </a>
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className="project-img">
        <img src={image} alt={title} />
        <div className="project-nav-btns">
          <button className="nav-btn" onClick={prevProject}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="nav-btn" onClick={nextProject}>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
