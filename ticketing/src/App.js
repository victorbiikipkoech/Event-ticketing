import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Events from './Components/Events';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Login from './Components/Login';
import CompanyLogin from './Components/CompanyLogin';
import CompanySignup from './Components/CompanySignup';
import CompanyInfo from './Components/CompanyInfo';
import Signup from './Components/Signup';
import CompanyEvent from './Components/CompanyEvent';
import UserDashboard from './Components/UserDashboard';




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
        <Route path="/companylogin" element={<CompanyLogin />} />
        <Route path="/companysignup" element={<CompanySignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/companyinfo" element={<CompanyInfo/>} />
        <Route path= "/createevent" element= {<CompanyEvent/>} />
        <Route path = "/userdashboard" element= {<UserDashboard/>}/>
        <Route path="/" exact element={<Home />} />
        </Routes>
    </Router>
  );
};

export default App;