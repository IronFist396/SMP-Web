import React from 'react';
import './Testimonials.css';
import image1 from '../assets/customers/1.jpeg'
import image2 from '../assets/customers/2.jpeg'
import image3 from '../assets/customers/3.jpeg'

const testimonials = [
  {
    name: "Rohit M.",
    feedback: "My car looks and drives like a beast! Incredible transformation.",
    image: image1
  },
  {
    name: "Sarah L.",
    feedback: "From boring to breathtaking — the rebrand turned heads everywhere I went.",
    image: image2
  },
  {
    name: "Aditya P.",
    feedback: "The custom detailing and engine upgrade was worth every rupee!",
    image: image3
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials-container container text-center my-5">
      <h2 className="section-title mb-4">What Our Customers Say</h2>
      <div className="row">
        {testimonials.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow testimonial-card">
              <div className="card-body d-flex flex-column align-items-center">
                <img src={item.image} alt={item.name} className="testimonial-img mb-3" />
                <p className="card-text text-center">"{item.feedback}"</p>
                <h5 className="card-title mt-3">– {item.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;