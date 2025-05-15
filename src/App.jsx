import React from 'react';
import { Link } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Footer from './components/Footer';
import BrandSlider from './components/Brandslider';
const App = () => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Services', path: '/services' },
  ];
  return (
    <>
      <div>
        <CustomNavbar links={links} />
        <Hero/>
        <BrandSlider/>
        <Testimonials/>
        <Services/>
        <Footer/>
      </div>

    </>
    
  );
};

export default App;
