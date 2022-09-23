import React from "react";
import "./About.css";
import aboutimg from "../assets/pic1 (2).jpg";
const About = () => {
  return (
    <div className='container-fluid' id='page'>
      <div className='row'>
        <div className='col-lg-6 col-md-12 imgA'>
          <img className='aboutimg' src={aboutimg} />
        </div>
        <div className='col-lg-6 about-col'>
          <div className='about-h4'>
            <h4 className='subtitle-h4'>ABOUT US</h4>
            <h2 className='about-p'>
              <b>We Have A Creative Team To Build Your Website Better</b>
            </h2>
          </div>
          <p className='about-desc'>
            In fact, I am pregnant even if I am pregnant, but the airline is
            afraid of ultricies. He wants to play football tomorrow. Lives are
            flattering, the pain is like a makeup truck, from a real estate
            agent, not an employee, and no one. But Euismod turpis always
            accepts that level. The children's laughter is a source of laughter.
          </p>
          <ul className='aboutul'>
            <li className='aboutli' id='icon-div'>
              <div>
                <i
                  class='fa fa-check-circle'
                  aria-hidden='true'
                  id='check-icon'
                ></i>
              </div>
              <div className='text-li'>
                Suspendisse ullamcorper soft clinical in easy.
              </div>
            </li>
            <li className='aboutli' id='icon-div'>
              <div>
                <i
                  class='fa fa-check-circle'
                  aria-hidden='true'
                  id='check-icon'
                ></i>
              </div>
              <div className='text-li'>
                It is also a great clinic for the weekend.
              </div>
            </li>
            <li className='aboutli' id='icon-div'>
              <div>
                <i
                  class='fa fa-check-circle'
                  aria-hidden='true'
                  id='check-icon'
                ></i>
              </div>
              <div className='text-li'>
                Until the fringilla wants to laugh, who is in the investment of
                ugly euismod?
              </div>
            </li>

            <li className='aboutli' id='icon-div'>
              <div>
                <i
                  class='fa fa-check-circle'
                  aria-hidden='true'
                  id='check-icon'
                ></i>
              </div>
              <div className='text-li'>
                Some of the pulvinar diam was for the children, the layer of the
                Moors
              </div>
            </li>
          </ul>
          <button className='aboutBtn'>Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default About;
