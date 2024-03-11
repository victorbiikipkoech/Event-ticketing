import React from 'react';
import videoBackground from '../images/background-video.mp4'; 

const Home = () => {
  return (
    <div>
      <h1 className='home'></h1>

      <div className='absolute top-0 left-0 z-0 w-full h-screen overflow-hidden'>
        <video className='w-full h-full object-cover object-bottom mx-auto' autoPlay loop muted>
          <source src={videoBackground} type='video/mp4' />
          
        </video>
      </div>

      <div className='relative z-10 text-white text-center mt-56'>
        <p className='text-5xl font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-br from-white to-white'>
          Unlock unforgettable experiences<br/>with just a ticket<br/>Your gateway to excitement<br/>awaits!
        </p>
      </div>
    </div>
  );
};

export default Home;
