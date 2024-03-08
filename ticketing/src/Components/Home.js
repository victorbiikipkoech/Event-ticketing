import React from 'react';
import backgroundImage from '../images/home.jpg'

const Home = () => {
  return (
    <div>
     <h1 className='home'>Welcome to the Home Page</h1>
     <div>
      
     <img className='w-full h-screen overflow-hidden'
      src={backgroundImage}
      
      alt="Home Page Image" />
     </div>
     
      <div className='text-bold'>
      <p className=''>Unlock unforgettable experiences with just a ticket. Your gateway to excitement awaits!</p>

      </div>

    </div>
  );
};

export default Home;

