import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Events from './Components/Events';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import CreateEvent from './Components/CreateEvent';
import Login from './Components/Login';
import CompanySignup from './Components/CompanySignup'
import CompanyLogin from './Components/CompanyLogin'



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='createevent' element={<CreateEvent/>}/>
        <Route path="/login" element={<Login />} />

        {/* <Route path="/signup" element={<Signup />} /> */}

        <Route path="/companysignup" element={<CompanySignup />} />
        <Route path="/companylogin" element={<CompanyLogin />} />

      </Routes>
    </Router>
  );
};

export default App;