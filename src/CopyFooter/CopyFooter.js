import React from "react";
import "./CopyFooter.css";
const CopyFooter = () => {
  return (
    <div className='footer bg-dark text-white'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 '>
            <p className='copyright'>
              Copyright © 2021 DexignZone. All rights reserved.
            </p>
          </div>
          <div className='col-lg-6 footer-icon'>
            <ul>
              <li className='copyfooter'>
                <i className='fa fa-user footericon'></i>
              </li>
              <li className='copyfooter'>
                <i className='fa fa-envelope footericon'></i>
              </li>
              <li className='copyfooter'>
                <i className='fa fa-thumbs-up footericon'></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyFooter;
