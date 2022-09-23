import React from "react";
import "./TopHeader.css";
const TopHeader = () => {
  return (
    <div className='container tophead d-lg-flex d-none'>
      <div className='topicon'>
        <i class='fa fa-thin fa-envelope headIcon'></i>
        <p>info@example.com</p>
        <i class='fa fa-thin fa-phone  headIcon'></i>
        <p>+91 987-654-3210</p>
      </div>
      <div className='topicon'>
        <i class='fa fa-brands fa-facebook' id='headIcon'></i>
        <i class='fa fa-brands fa-instagram' id='headIcon'></i>
        <i class='fa fa-brands fa-twitter' id='headIcon'></i>
      </div>
    </div>
  );
};

export default TopHeader;
