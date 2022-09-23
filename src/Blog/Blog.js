import React from "react";
import Slider from "react-slick";
import { blogimg } from "../Data";
import "./Blog.css";
const Blog = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 610,
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
    <>
      <div className='section-head ' id='blog'>
        <h4 className='subtitle' id='subtitle'>
          OUR BLOG
        </h4>
        <h2 className='title'>
          <b>Latest News & Blog</b>
        </h2>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col pt-5'>
            <Slider {...settings}>
              {blogimg.map((blogitem) => {
                return (
                  <>
                    <div>
                      <img className='blog-img' src={blogitem.imgblog} />
                    </div>
                    <div className='blog-detail'>
                      <h6 className='blog-ref'>{blogitem.ref}</h6>
                      <h3 className='blog-heading'>{blogitem.heading}</h3>
                      <p className='blog-desc'>{blogitem.desc}</p>
                      <p className='blog-link'>{blogitem.link}</p>
                    </div>
                  </>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
