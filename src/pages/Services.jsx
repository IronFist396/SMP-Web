import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Services.css'
import { FaPaintRoller, FaTachometerAlt, FaTools, FaCarSide, FaLightbulb, FaCogs } from 'react-icons/fa';
import Footer from '../components/Footer'
import BrandSlider from '../components/Brandslider';

const services = [
  {
    icon: <FaPaintRoller size={60} />,
    title: <u>Custom Vinyl Wraps</u>,
    description: 'Stand out with premium vinyl wraps—matte, gloss, carbon fiber or wild custom liveries. Applied with precision for flawless results and paint protection.',
  },
  {
    icon: <FaTachometerAlt size={60} />,
    title: <u>Performance Engine Tuning</u>,
    description: 'ECU remapping and performance tuning to unleash your vehicle’s full potential—whether it’s more speed, better torque, or refined responsiveness.',
  },
  {
    icon: <FaTools size={60} />,
    title: <u>Exhaust System Upgrades</u>,
    description: 'Aggressive sound, improved airflow, and better performance—custom stainless, titanium, or valvetronic exhausts tailored to your ride.',
  },
  {
    icon: <FaCarSide size={60} />,
    title: <u>Wheel & Tire Styling</u>,
    description: 'Upgrade your stance with luxury rims, performance tires, and custom fitments—turn your daily drive into a showstopper.',
  },
  {
    icon: <FaLightbulb size={60} />,
    title: <u>Custom Lighting Kits</u>,
    description: 'Projector headlights, LED DRLs, underglow kits, and ambient interiors — custom setups that shine on and off the road.',
  },
  {
    icon: <FaCogs size={60} />,
    title: <u>Interior Detailing & Mods</u>,
    description: 'Carbon trims, stitched leather seats, starlight roofs, racing pedals—complete cabin customization to match your lifestyle.',
  },
];

const Services = () => {
    const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Services', path: '/services' },
  ];
  return (
      <>
        <Navbar companyName="MyCompany" links={links} />
        <div className="services-container1">
            <h1 className="services-title">Signature Services</h1>
            <p className="services-subtitle">More than a makeover — it's your car, <em>reimagined</em></p>
            <div className="row">
            {services.map((service, index) => (
            <div className="col-md-4 mb-4" key={index}>
                  <div className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                  </div>
            </div>
            ))}
            </div>
      </div>
      <BrandSlider/>
      <Footer/>
      </>
      )
};

export default Services;
