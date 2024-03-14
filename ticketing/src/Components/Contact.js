import React from 'react';
import Footer from './Footer'; // Import the Footer component

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-b from-purple-500 to-pink-500 text-white min-h-screen relative">
      <div className="container mx-auto py-8">
        <h2 className="text-4xl font-semibold text-center mb-8">Contact Us</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <h3 className="text-2xl font-semibold mb-4">Contact Form</h3>
            <div className='text-black'>
              <form action="https://formspree.io/f/your_formspree_endpoint" method="POST">
                <input type="hidden" name="_next" value="URL_AFTER_SUBMISSION" />
                
                <div className="mb-4">
                  <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
                  <input type="text" id="name" name="name" className="w-full py-2 px-4 bg-white  border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
                  <input type="email" id="email" name="_replyto" className="w-full py-2 px-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-lg font-semibold mb-2">Subject</label>
                  <input type="text" id="subject" name="subject" className="w-full py-2 px-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
                  <textarea id="message" name="message" rows="5" className="w-full py-2 px-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
                </div>
                <button type="submit" className="bg-blue-600 text-lg font-semibold py-2 px-6 rounded-md hover:bg-blue-700">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer className="absolute bottom-0 left-0 w-full" /> {/* Position the Footer at the bottom */}
    </div>
  );
};

export default ContactUs;
