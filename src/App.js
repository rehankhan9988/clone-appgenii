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
  const sections = [
    {
      id: 1,
      className: "mainhead",
      component: <TopHeader />,
    },
    {
      id: 2,
      className: "navbar",
      component: (
        <div>
          <Navbar />
          <Quote />
        </div>
      ),
    },
    {
      id: 3,
      className: "service-head",
      component: <Service />,
    },
    {
      id: 4,
      className: "service-head",
      component: <About />,
    },
    {
      id: 5,
      className: "service-head",
      component: <Testing />,
    },
    {
      id: 6,
      className: "container service-head",
      component: <Portfolio />,
    },
    {
      id: 7,
      className: "container plan-card service-head pt-3",
      component: <Plans />,
    },
    {
      id: 8,
      className: "testimonial service-head",
      component: <Testimonial />,
    },
    {
      id: 9,
      className: "service-head",
      component: <Blog />,
    },
    {
      id: 10,
      className: "service-head",
      component: <Logo />,
    },
    {
      id: 11,
      className: "service-head",
      style: { paddingTop: "6%" },
      component: <InputCard />,
    },
    {
      id: 12,
      className: "service-head",
      id: "footer-Con",
      component: <Footer />,
    },
    {
      id: 13,
      id: "copyfooter",
      component: <CopyFooter />,
    },
  ];

  return (
    <div>
      {/* <div className='mainhead'>
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
      </div> */}
      {sections.map((section) => (
        <div
          key={section.id}
          className={section.className}
          style={section.style}
          id={section.id}
        >
          {section.component}
        </div>
      ))}
    </div>
  );
}

export default App;
