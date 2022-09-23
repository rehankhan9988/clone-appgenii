import React from "react";
import "./Footer.css";
import { footer } from "../Data";
const Footer = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          {footer.map((data) => {
            return (
              <>
                <div className='col-sm-6 col-md-4 col-xl-3' id='footer'>
                  <ul>
                    <img src={data.footerimg} id='img' />
                    <li className='li-item footer-li'>
                      <i
                        className='fa fa-phone'
                        aria-hidden='true'
                        id='icon'
                      ></i>
                      {data.Number}
                    </li>
                    <li className='footer-li'>
                      <i
                        className='fa fa-envelope'
                        aria-hidden='true'
                        id='icon'
                      ></i>
                      {data.email}
                    </li>
                    <li className='footer-li'>
                      <i
                        className='fa fa-map-marker'
                        aria-hidden='true'
                        id='icon'
                      ></i>
                      {data.adress}
                    </li>
                  </ul>
                </div>
                <div className='col-sm-6 col-md-4 col-xl-3' id='footer'>
                  <ul>
                    <h3 className='footer-h3'>
                      <b>{data.link}</b>
                    </h3>
                    <div className='footer-border'></div>
                    <li className='li-item footer-li'>
                      <b>{data.home}</b>
                    </li>
                    <li className='footer-li'>
                      <b>{data.about}</b>
                    </li>
                    <li className='footer-li'>
                      <b>{data.services}</b>
                    </li>
                    <li className='footer-li'>
                      <b>{data.team}</b>
                    </li>
                    <li className='footer-li'>
                      <b>{data.blog}</b>
                    </li>
                  </ul>
                </div>
                <div className='col-sm-6 col-md-4 col-xl-3' id='footer'>
                  <ul>
                    <h3 className='footer-h3'>
                      <b>{data.Ourservices}</b>
                    </h3>
                    <div className='footer-border'></div>
                    <li className='li-item footer-li'>
                      <b>{data.research}</b>
                    </li>
                    <li className='footer-li'>
                      <b>{data.development}</b>
                    </li>
                    <li className='footer-li'>
                      <b>{data.solution}</b>
                    </li>
                    <li className='footer-li'>
                      <b>{data.marketing}</b>
                    </li>
                    <li className='footer-li'>
                      <b>{data.design}</b>
                    </li>
                  </ul>
                </div>
                <div className='col-sm-6 col-lg-3' id='footer'>
                  <ul>
                    <h3 className='footer-h3'>
                      <b>{data.link}</b>
                    </h3>
                    <div className='footer-border'></div>
                    <li className='li-item footer-li'>
                      <b>{data.home}</b>
                    </li>
                    <li className='footer-li'>
                      <b>{data.about}</b>
                    </li>
                    <li className='footer-li'>
                      <b>{data.services}</b>
                    </li>
                    <li className='footer-li'>
                      <b>{data.team}</b>
                    </li>
                    <li className='footer-li'>
                      <b>{data.blog}</b>
                    </li>
                  </ul>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Footer;
