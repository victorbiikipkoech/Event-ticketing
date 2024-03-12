import React, { useState } from 'react';
import './Navbar.css';
import logoImage from '../images/logo.png'

const Navbar = () => {
  const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showNavbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo">
            <img className='h-12' src={logoImage} alt='logo '/>
          </a>
          <div className={click ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav nav-menu-items">
              <li className="nav-item">
                <a href="/" className="nav-links">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-links">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/Events" className="nav-links">
                    Events
                </a>
              </li>
              <li className="nav-item">
                <a href="/contact" className="nav-links">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a href="/testimonial" className="nav-links">
                  Testimonial
                </a>
              </li>

              <li className="nav-item">
                <a href="/login" className="nav-links">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a href="/signup" className="nav-links">
                  Sign up
                </a>
                
              </li>
              <li className="nav-item">
                <a href="/companysignup" className="nav-links">
                  Company Signup
                </a>
              </li>
              <li className="nav-item">
                <a href="/companylogin" className="nav-links">
                  Company Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };

  return (
    <div onClick={closeMobileMenu}>
      {showNavbar()}
    </div>
  );
};

export default Navbar;