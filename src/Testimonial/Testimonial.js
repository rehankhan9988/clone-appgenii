import React from "react";
import "./Testimonial.css";
import { imglist } from "../Data";
import { testimonial } from "../Data";
import Slider from "react-slick";
const Testimonial = () => {
  const blogsetting = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <div className='section-head'>
        <h4 className='subtitle' id='subtitle'>
          TESTIMONIAL
        </h4>
        <h2 className='title' id='title-testo'>
          <b>See What Our Clients Say’s</b>
        </h2>
      </div>
      <div className='img-div' id='card-click'>
        {imglist.map((imgList) => {
          return <div>{<img src={imgList.img} className='images' />}</div>;
        })}
      </div>
      <div className='container card-img'>
        <div className='row'>
          <div className='col-11 pt-5'>
            <Slider {...blogsetting}>
              {testimonial.map((text) => {
                return (
                  <div className='card' id='testimonial-card'>
                    <div className='card-body'>
                      <h5 className='card-title'>{text.title}</h5>
                      <h6 className='sub-title'>{text.para}</h6>
                      <p className='carddesc'>{text.desc}</p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
