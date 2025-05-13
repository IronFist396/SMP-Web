import React from 'react';
import './Brandslider.css';

import audi from '../assets/logo/audi.jpg';
import bmw from '../assets/logo/bmw.png';
import ferrari from '../assets/logo/ferrari.webp';
import mercedes from '../assets/logo/mercedes.jpg';
import porsche from '../assets/logo/porsche.jpg';
import tesla from '../assets/logo/tesla.png';
import volkswagen from '../assets/logo/volkswagen.jpg'

const logos = [audi, bmw, ferrari, mercedes, porsche, tesla, volkswagen];

const BrandSlider = () => {
  return (
    <div className="brand-slider-container py-4 my-4">
      <div className="slider-track d-flex align-items-center">
        {[...logos, ...logos].map((logo, index) => (
          <div className="logo-wrapper" key={index}>
            <img src={logo} alt="Car Brand" className="brand-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;
