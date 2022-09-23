import React from "react";
import "./Portfolio.css";
import { portfolio } from "../Data";
const Portfolio = () => {
  return (
    <div className='portflio'>
      <div className='section-head pt-5'>
        <div>
          <h4 className='subtitle' id='subtitle'>
            PORTFOLIO
          </h4>
        </div>
        <h2 className='title'>
          <b>Take A Look At Our Latest Work</b>
        </h2>
        <div className='portfolio-ul'>
          <ul className='port-ul'>
            <li className='port-li'>
              <b>All</b>
            </li>
            <li className='port-li'>
              <b>Web Design</b>
            </li>
            <li className='port-li'>
              <b> Branding</b>
            </li>
            <li className='port-li'>
              <b>Web Development</b>
            </li>
            <li className='port-li'>
              <b>Mobile App</b>
            </li>
            <li className='port-li'>
              <b>SEO</b>
            </li>
          </ul>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          {portfolio.map((image) => {
            return (
              <div className='col-lg-4 col-md-6 col-sm-12 port-card'>
                <img className='portimg' src={image.protimg} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
