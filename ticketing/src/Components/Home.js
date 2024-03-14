import React from 'react';
import videoBackground from '../images/background-video.mp4'; 


const Home = () => {
  return (
    <div>
    {/* <div className="relative">
   <h1 className='home'></h1> */}

   {/* Video background */}
   <div className='absolute top-0 left-0 z-0 w-full h-screen overflow-hidden '>
     <video className='w-full h-full object-cover object-bottom mx-auto' autoPlay loop muted>
       <source src={videoBackground} type='video/mp4' />
     </video>
   </div>

   {/* Content */}
   <div className='relative z-10 text-center mt-28'>
     <p className='text-white text-5xl font-extrabold '>
       Unlock unforgettable experiences<br/>with just a ticket<br/>Your gateway to excitement<br/>awaits!
     </p>
   </div>

 {/* </div> */}

   
   
   
      
      
    </div>
  );
};

export default Home;
