import React from "react";
import "./Testing.css";
const Testing = () => {
  return (
    <div className='container testinghead'>
      <div className='row'>
        <div className='col-lg-5 col-md-12 testing-left'>
          <div className='about-h4'>
            <h4 className='subtitle-h4'>OUR SERVICES</h4>
            <h2 className='about-p'>
              <b>Behind The Story Of Slack Digital Agencyr</b>
            </h2>
          </div>
          <p className='about-desc'>
            Smartphones Until the mass is made just like the lacinia, not like
            the cat. Even Euismod, a great and efficient body, just takes up the
            earth, who needs the bed and wants it. <br />
            <br />
            The development of disease-causing vehicles. Suspendisse purus nibh,
            lacinia ut rutrum eu, tincidunt eleifend ligula.
            <br /> <br />
            Maecenas was a sad man of life. Mauris sollicitudin is free and
            takes care. Each member of the team is responsible for the employee.
          </p>
        </div>

        <div className='col-lg-7 testing-right'>
          <div className='card testing-card' id='card-top'>
            <div className='card-body' id='testing-icon'>
              <div>
                <i
                  class='	fa fa-gitlab'
                  style={{
                    fontSize: "36px",
                    paddingTop: "120%",
                  }}
                  id='icons-test'
                ></i>
              </div>
              <div>
                <h5>
                  <b className='testing-title'>Idea & Analysis Gathering</b>
                </h5>
                <h5 className='testing-desc'>
                  The Maecenas laoreet is made by arrows. For some young
                  players, it is important to promote the real estate of the
                  casino. CNN fans.
                </h5>
              </div>
            </div>
          </div>
          <br />
          <div
            className='card testing-card'
            id='card-center'
            style={{ marginLeft: "auto" }}
          >
            <div className='card-body' id='testing-icon'>
              <div>
                <i
                  class='fa fa-connectdevelop'
                  style={{ fontSize: "36px", paddingTop: "120%" }}
                  id='icons-test'
                ></i>
              </div>
              <div>
                <h5>
                  <b className='testing-title'>Design & Development</b>
                </h5>
                <h5 className='testing-desc'>
                  The Maecenas laoreet is made by arrows. For some young
                  players, it is important to promote the real estate of the
                  casino. CNN fans.s
                </h5>
              </div>
            </div>
          </div>
          <br />
          <div className='card testing-card' id='card-top'>
            <div className='card-body' id='testing-icon'>
              <div>
                <i
                  class='fa fa-ge'
                  style={{ fontSize: "36px", paddingTop: "120%" }}
                  id='icons-test'
                ></i>
              </div>
              <div>
                <h5>
                  <b className='testing-title'>Testing & Lunching</b>
                </h5>
                <h5 className='testing-desc'>
                  The Maecenas laoreet is made by arrows. For some young
                  players, it is important to promote the real estate of the
                  casino. CNN fans.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testing;
