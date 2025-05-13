import React from 'react';
import './Footer.css';
import { FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://x.com/F1" target="_blank" className="iconf"><FaXTwitter /></a>
        <a href="https://www.instagram.com/f1/" target="_blank" className="iconf"><FaInstagram /></a>
        <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" target="_blank" className="iconf"><FaYoutube /></a>
      </div>
      <div className="footer-info">
        <p>F1 Cars, Beverly Hills, CA   </p>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
