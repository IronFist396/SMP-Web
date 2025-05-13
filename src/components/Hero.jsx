import React from 'react';
import './Hero.css';
import heroImg from '../assets/heroImg2.jpg';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
  return (
    <div className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="overlay">
        <div className="hero-text">
          <h1>Drive Power.</h1>
          <h2>Own Style.</h2>
          <button className="cta-btn" onClick={() => navigate('/contact')}>Book Your Upgrade</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
