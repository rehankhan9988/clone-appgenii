import React from "react";
import "./Navbar.css";
import logo from "../assets/logo-2.png";
const Navbar = () => {
  return (
    <>
      <nav
        className=' navbar-expand-lg container'
        style={
          {
            // position: "sticky",
            // top: "0",
            // zIndex: 1,
            // padding: "5px 70px",
            // backgroundColor: "white",
            // color: "black",
          }
        }
      >
        <a className='navbar-brand' href='#'>
          <img className='brand' src={logo} />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div
          className='collapse navbar-collapse navbar-ui'
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item dropdown navbar-li'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                <b>Home</b>
              </a>
              <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <a className='dropdown-item' href='#'>
                  About us
                </a>
                <a className='dropdown-item' href='#'>
                  Faq
                </a>

                <a className='dropdown-item' href='#'>
                  Team List
                </a>
              </div>
            </li>
            <li className='nav-item navbar-li'>
              <a className='nav-link' href='#page'>
                <b>pages</b>
              </a>
            </li>
            <li className='nav-item dropdown navbar-li'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                <b>Blogs</b>
              </a>
              <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <a className='dropdown-item' href='#blog'>
                  Blog grid
                </a>
                <a className='dropdown-item' href='#blog'>
                  Blog Details
                </a>
              </div>
            </li>
            <li className='nav-item navbar-li'>
              <a className='nav-link' href='#Servics'>
                <b>services</b>
              </a>
            </li>
            <li>
              <button className='brand-btn'>get a Quote</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
