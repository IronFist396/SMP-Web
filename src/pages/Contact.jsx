import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import './Contact.css';
import Footer from '../components/Footer'

const Contact = () => {
const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Services', path: '/services' },
  ];

    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
    const [errors, setErrors] = useState({});
      const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? '' : 'Name is required.';
    tempErrors.email = /^\S+@\S+\.\S+$/.test(formData.email) ? '' : 'Valid email required.';
    tempErrors.message = formData.message ? '' : 'Message cannot be empty.';
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);

      // Send the data to your backend here!

      alert('Thanks for reaching out!');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


    return <>
    <Navbar companyName="MyCompany" links={links} />
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label>Name*</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'input-error' : ''}
          />
          <span className="error">{errors.name}</span>
        </div>

        <div className="form-group">
          <label>Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'input-error' : ''}
          />
          <span className="error">{errors.email}</span>
        </div>

        <div className="form-group">
          <label>Message*</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? 'input-error' : ''}
          ></textarea>
          <span className="error">{errors.message}</span>
        </div>

        <button type="submit">Book Upgrade</button>
      </form>
    </div>

    <div className="map-section text-center my-5">
    <h2 className='reaching'>Reach Our Store</h2>
    <div className="map-responsive" style={{ marginTop: "20px" }}>
      <iframe
        title="Google Maps Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.888209980246!2d-118.40799668478288!3d34.09000918059025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bb93a26a79d5%3A0x7ab6d1fd4e9f3c5c!2sBeverly%20Hills%2C%20CA%2090210%2C%20USA!5e0!3m2!1sen!2sin!4v1715440360000!5m2!1sen!2sin"
        width="30%"
        height="350"
        style={{ border: 0, borderRadius: "10px", maxWidth: "100%" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
    <Footer/>
</>
};

export default Contact;
