import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './About.css'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import Stats from '../components/Stats';

const About = () => {
const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Services', path: '/services' },
  ];

    return <>
    <Navbar companyName="MyCompany" links={links} />
    <Hero2/>
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Founded in the late 1980s in the heart of Beverly Hills, F1 Cars began as a boutique garage 
        with a singular passion: turning good cars into unforgettable machines. Over the decades, we've evolved 
        from engine tuners to full-fledged automotive stylists — pioneers in fusing high-performance 
        engineering with signature design. Whether it's reworking a vintage engine or laying down 
        a head-turning custom wrap, we’ve stayed true to our belief: your car should drive like a beast 
        and look like a masterpiece.
      </p>

      <p>
        Today, F1 Cars is a destination for auto-enthusiasts, collectors, and visionaries who want their 
        rides to reflect their identity. From subtle upgrades to radical overhauls, every build is crafted 
        with precision and pride. Nestled in Beverly Hills but driven by global inspiration, we continue 
        to push the boundaries of what it means to customize — one ride at a time.
      </p>
    </div>
    <Stats/>
    <Footer/>
</>
};

export default About;
