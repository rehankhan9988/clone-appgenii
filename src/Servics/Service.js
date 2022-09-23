import React from "react";
import "./Service.css";
const Service = () => {
  return (
    <div className='container' id='Servics'>
      <div className='row'>
        <div className='col-lg-4 col-md-6'>
          <div className='section-head '>
            <h4 className='subtitle'>OUR SERVICES</h4>
            <h2
              className='title'
              style={{ fontSize: "40px", paddingBottom: "40px" }}
            >
              <b className='service-title'>We Are Providing Digital Services</b>
            </h2>
          </div>
          <div className='card service-card'>
            <div className='card-body'>
              <i
                class='fa fa-connectdevelop'
                style={{ fontSize: "36px", paddingBottom: "6%" }}
              ></i>
              <h5>
                <b className='service-title'>Strategy & Research</b>
              </h5>
              <h5 className='card-desc'>
                Manufacturing is made from To target the target protein. It is a
                great lake, a great one, the people are saddened by the lion's
                arrows.
              </h5>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6'>
          <div className='card service-card'>
            <div className='card-body'>
              <i
                class='	fa fa-gitlab'
                style={{ fontSize: "36px", paddingBottom: "6%" }}
              ></i>
              <h5>
                <b className='service-title'>Web Development</b>
              </h5>
              <h5 className='card-desc'>
                Manufacturing is made from To target the target protein. It is a
                great lake, a great one, the people are saddened by the lion's
                arrows.
              </h5>
            </div>
          </div>
          {/* <br /> */}
          <div className='card service-card'>
            <div className='card-body'>
              <i
                class='fa fa-ge'
                style={{ fontSize: "36px", paddingBottom: "6%" }}
              ></i>
              <h5>
                <b className='service-title'>Web Solutions</b>
              </h5>
              <h5 className='card-desc'>
                Manufacturing is made from To target the target protein. It is a
                great lake, a great one, the people are saddened by the lion's
                arrows.
              </h5>
            </div>
          </div>
        </div>
        <div className='col-lg-4 '>
          <div className='card service-card'>
            <div className='card-body'>
              <i
                class='fa fa-css3'
                style={{ fontSize: "36px", paddingBottom: "6%" }}
              ></i>
              <h5>
                <b className='service-title'>SEO & Marketing</b>
              </h5>
              <h5 className='card-desc'>
                Manufacturing is made from To target the target protein. It is a
                great lake, a great one, the people are saddened by the lion's
                arrows.
              </h5>
            </div>
          </div>
          {/* <br /> */}
          <div className='card service-card'>
            <div className='card-body'>
              <i
                class='	fa fa-ioxhost'
                style={{ fontSize: "36px", paddingBottom: "6%" }}
              ></i>
              <h5>
                <b className='service-title'>Growth Tracking</b>
              </h5>
              <h5 className='card-desc'>
                Manufacturing is made from To target the target protein. It is a
                great lake, a great one, the people are saddened by the lion's
                arrows.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
{
  /* <div className='col-lg-4'>
{service.map((service) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{service.cardtitle}</h5>
        <p className='card-text'>{service.carddesc}</p>
      </div>
    </div>
  );
})}
</div> */
}
