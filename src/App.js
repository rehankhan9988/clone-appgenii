import React from "react";
import "./App.css";
import Plans from "./Plans/Plans";
import Testimonial from "./Testimonial/Testimonial";
import "bootstrap/dist/css/bootstrap.css";
import Blog from "./Blog/Blog";
import Logo from "./Logo/Logo";
import InputCard from "./inputCard/InputCard";
import Footer from "./Footer/Footer";
import CopyFooter from "./CopyFooter/CopyFooter";
import Portfolio from "./Portfolio/Portfolio";
import Service from "./Servics/Service";
import About from "./About/About";
import Testing from "./Testing/Testing";
import TopHeader from "./TopHeader/TopHeader";
import Navbar from "./Navbar/Navbar";
import Quote from "./Quote/Quote";
function App() {
  return (
    <div>
      <div className='mainhead'>
        <TopHeader />
      </div>
      <div className='navbar'>
        <Navbar />
        <Quote />
      </div>
      <div className='service-head'>
        <Service />
      </div>
      <div className='service-head'>
        <About />
      </div>
      <div className='service-head'>
        <Testing />
      </div>
      <div className='container service-head'>
        <Portfolio />
      </div>
      <div className='container plan-card service-head pt-3'>
        <Plans />
      </div>
      <div className='testimonial service-head'>
        <Testimonial />
      </div>
      <div className=' service-head'>
        <Blog />
      </div>
      <div className=' service-head'>
        <Logo />
      </div>
      <div className=' service-head' style={{ paddingTop: "6%" }}>
        <InputCard />
      </div>
      <div className=' service-head' id='footer-Con'>
        <Footer />
      </div>
      <div id='copyfooter'>
        <CopyFooter />
      </div>
    </div>
  );
}

export default App;
