import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between">
        <div className="footer-item">
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="social-icons">
            <FaFacebook className="text-2xl mr-4 cursor-pointer" onClick={() => window.open('https://facebook.com')} />
            <FaTwitter className="text-2xl mr-4 cursor-pointer" onClick={() => window.open('https://twitter.com')} />
            <FaInstagram className="text-2xl cursor-pointer" onClick={() => window.open('https://instagram.com')} />
          </div>
        </div>
        <div className="footer-item" onClick={() => handleNavigation('/contact')}>
          <h3 className="text-lg font-bold mb-2 cursor-pointer text-blue-500">Contact Us</h3>
          <div className="flex items-center mb-2">
            <FaPhone className="mr-2" />
            <span>+1234567890</span>
          </div>
          <div className="flex items-center">
            <FaWhatsapp className="mr-2" />
            <span>+1234567890</span>
          </div>
        </div>
        <div className="footer-item" onClick={() => handleNavigation('/')}>
          <h3 className="text-lg font-bold mb-4 cursor-pointer text-blue-500">Home</h3>
          <p className="mb-2">123 Street, City</p>
          <p>Country</p>
        </div>
        <div className="footer-item" onClick={() => handleNavigation('/about')}>
          <h3 className="text-lg font-bold mb-4 cursor-pointer text-blue-500">About Us</h3>
          <p>Learn more about our mission and team.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
