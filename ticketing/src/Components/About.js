import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
<<<<<<< HEAD
import AboutUsImage from '../images/about.jpg'; // Header image
import SecondaryImage1 from '../images/secondary.jpg'; // First secondary image
import SecondaryImage2 from '../images/Team.jpg'; // Second secondary image

const About = () => {
  return (
    <div className="bg-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <img src={AboutUsImage} alt="About Us" className="w-full object-cover rounded-lg mb-8" />
        
        <div className="flex flex-wrap -mx-4 items-start">
          <div className="w-full lg:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="mb-4">
            Eventix revolutionizes event ticketing with a user-centric platform for easy access to memorable live experiences. We bridge event enthusiasts and organizers, celebrating community and unforgettable moments in just a few clicks.
            </p>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="mb-4">
            our mission is to provide a seamless and enjoyable experience for event-goers to find, book, and attend their favorite events, while also empowering event organizers to reach their audience effectively.
            </p>
            <img src={SecondaryImage2} alt="Secondary 2" className="w-full object-cover rounded-lg mb-4" />
          </div>

          <div className="w-full lg:w-1/2 px-4">
            <img src={SecondaryImage1} alt="Secondary 1" className="h-2/3 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-4">Meet our Team</h3>
            <p>
            Event Ticketing team is dedicated to delivering exceptional service and experiences to our users. From our founders to our technical experts and marketing professionals, meet the passionate individuals behind our platform.
            </p>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-8">
          <a href="https://www.facebook.com" className="text-blue-600 hover:text-blue-800">
            <FaFacebook size="2em" />
          </a>
          <a href="https://www.instagram.com" className="text-pink-600 hover:text-pink-800">
            <FaInstagram size="2em" />
          </a>
          <a href="https://www.linkedin.com" className="text-blue-500 hover:text-blue-700">
            <FaLinkedin size="2em" />
          </a>
        </div>
      </div>
=======
import AboutImage from '../images/about.jpg'



const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-200 to-gray-300 min-h-screen flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <div>
        <img src={AboutImage} alt="About" className="mx-auto mb-8 rounded-lg shadow-lg" />
        </div>

        <p className="text-lg text-center mb-6">Welcome to <span className="text-indigo-600 font-semibold">Event Ticketing</span>, your go-to destination for discovering and attending exciting events!</p>
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2 text-center">Our Mission</h3> 
          <p className="text-center">At <span className="text-indigo-600 font-semibold">Event Ticketing</span>, our mission is to provide a seamless and enjoyable experience for event-goers to find, book, and attend their favorite events, while also empowering event organizers to reach their audience effectively.</p> {/* 2. Center the text */}
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2 text-center">Meet Our Team</h3> 
          <p className="text-center">Our team at <span className="text-indigo-600 font-semibold">Event Ticketing</span> is dedicated to delivering exceptional service and experiences to our users. From our founders to our technical experts and marketing professionals, meet the passionate individuals behind our platform.</p> {/* 2. Center the text */}
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2 text-center">Our Deliverables</h3> 
          <ul className="list-disc pl-6 text-center">
            <li>Wide range of events to choose from</li>
            <li>Secure and convenient ticket purchasing</li>
            <li>Personalized event recommendations</li>
            <li>Easy event organization and management</li>
            <li>Dedicated customer support</li>
          </ul>
        </div>
       <div>
          <h3 className="text-2xl font-bold mb-2 text-center">Get in Touch</h3> 
          <p className="text-center mb-4">Have questions or feedback? We'd love to hear from you! Reach out to us at <span className="text-indigo-600 font-semibold">contact@eventTicketing.com</span> or <span className="text-indigo-600 font-semibold">123-456-7890</span>, or connect with us on social media:</p> {/* 2. Center the text */}
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800"><FaFacebook /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800"><FaInstagram /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800"><FaLinkedin /></a>
          </div>
        </div>

      </div>
     
>>>>>>> main
    </div>
  );
};

<<<<<<< HEAD
export default About;
=======
export default About;
>>>>>>> main
