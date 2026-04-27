import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import './nav.css';

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const existing = document.querySelector('script[src="/finisher-header.es5.min.js"]');
    if (existing) return;
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

  const navLinks = [
    { to: '/', label: 'Home' }, 
    { to: '/resume', label: 'Resume' },
    { to: '/project', label: 'Projects' },
  ];

  return (
    <div className="home">
      <nav>
        <div className="nav__container">
          <Link to="/" className="nav__logo">Aditya</Link>

          {/* Desktop + Mobile menu */}
          <ul className={`nav__menu ${menuOpen ? 'open' : ''}`}>
            {navLinks.map(({ to, label }) => (
              <li key={label}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
            <li>
              <Link to="/contact">
                <button className="hire-btn">Hire Me</button>
              </Link>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className="finisher-header" />
    </div>
  );
};

export default Nav;
