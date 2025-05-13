import React from 'react';
import './Hero2.css';
import heroImg from '../assets/ferrari.jpg';
import { useNavigate } from 'react-router-dom';

const Hero2 = () => {
    const navigate = useNavigate();
  return (
    <div className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="overlay">
        <div className="hero-text">
          <h1><span className='highlight'>Fueled by</span> Passion</h1>
          <h2><span className='highlight'>Driven by</span> Chaos</h2>
          {/* <button className="cta-btn" onClick={() => navigate('/contact')}>Book Your Upgrade</button> */}
        </div>
      </div>
    </div>
  );
};

export default Hero2;
