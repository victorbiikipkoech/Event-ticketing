import React from 'react';
import Footer from './Footer'; // Import the Footer component

const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-200 to-gray-300 min-h-screen flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
        <p className="text-lg text-center mb-6">Welcome to <span className="text-indigo-600 font-semibold">Event Ticketing</span>, your go-to destination for discovering and attending exciting events!</p>
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
          <p>At <span className="text-indigo-600 font-semibold">Event Ticketing</span>, our mission is to provide a seamless and enjoyable experience for event-goers to find, book, and attend their favorite events, while also empowering event organizers to reach their audience effectively.</p>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">Meet Our Team</h3>
          <p>Our team at <span className="text-indigo-600 font-semibold">Event Ticketing</span> is dedicated to delivering exceptional service and experiences to our users. From our founders to our technical experts and marketing professionals, meet the passionate individuals behind our platform.</p>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">Our Deliverables</h3>
          <ul className="list-disc pl-6">
            <li>Wide range of events to choose from</li>
            <li>Secure and convenient ticket purchasing</li>
            <li>Personalized event recommendations</li>
            <li>Easy event organization and management</li>
            <li>Dedicated customer support</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
          <p>Have questions or feedback? We'd love to hear from you! Reach out to us at <span className="text-indigo-600 font-semibold">contact@eventTicketing.com</span> or <span className="text-indigo-600 font-semibold">123-456-7890</span>, or connect with us on social media.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-indigo-600 hover:text-indigo-800">Facebook</a>
            <a href="#" className="text-indigo-600 hover:text-indigo-800">Instagram</a>
          </div>
        </div>
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default About;
