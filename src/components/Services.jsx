import React from 'react';
import './Services.css';
import { FaPaintBrush, FaCogs, FaRocket, FaCarCrash } from 'react-icons/fa';

const services = [
  {
    title: "Custom Wraps & Decals",
    description: "Unique vinyl wraps, decals, and graphics to match your personality.",
    icon: <FaPaintBrush size={60} />
  },
  {
    title: "Engine Upgrades",
    description: "Boost your performance with turbo kits, remaps, and more.",
    icon: <FaRocket size={60} />
  },
  {
    title: "Body Kits & Mods",
    description: "Sleek body kits, spoilers, and trims for that aggressive look.",
    icon: <FaCarCrash size={60} />
  },
  {
    title: "Performance Tuning",
    description: "Suspension tuning, exhaust swaps, and gearbox remapping.",
    icon: <FaCogs size={60} />
  }
];

const Services = () => {
  return (
    <div className="services-container container text-center my-5">
      <h2 className="section-title mb-4">Our Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100 shadow service-card p-3">
              <div className="icon mb-3">{service.icon}</div>
              <h5 className="card-title">{service.title}</h5>
              <p className="card-text">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
