import React from 'react';
import './Stats.css';

const stats = [
  {
    number: "900+",
    title: "Cars Upgraded",
    description: "Performance, efficiency, and style — all redefined."
  },
  {
    number: "1200+",
    title: "Custom Styles Delivered",
    description: "Wraps, decals, and body kits that turn heads."
  },
  {
    number: "500+",
    title: "Happy Clients",
    description: "Driven by trust and turbocharged satisfaction."
  }
];

const Stats = () => {
  return (
    <div className="stats-container container text-center my-5">
      <h2 className="section-title mb-4">Our Impact</h2>
      <div className="row">
        {stats.map((stat, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow stat-card p-4 d-flex align-items-center justify-content-center text-center p-4">
              <h1 className="stat-number">{stat.number}</h1>
              <h5 className="card-title mt-2">{stat.title}</h5>
              <p className="card-text">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
