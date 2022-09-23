import React from "react";
import "./Logo.css";
import { logoimg } from "../Data";
import Slider from "react-slick";
const Logo = () => {
  const logosettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1031,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 574,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 303,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  return (
    <div className='container logo-container'>
      <div className='row'>
        <Slider {...logosettings}>
          {logoimg.map((imglogo) => {
            return (
              <div className='col'>
                <img className='logo-img' src={imglogo.logos} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Logo;
