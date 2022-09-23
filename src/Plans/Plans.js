import React from "react";
import "./Plans.css";
import "bootstrap/dist/css/bootstrap.css";
import { plan } from "../Data";
const Plans = () => {
  return (
    <>
      <div className='section-head'>
        <h4 className='subtitle' id='subtitle'>
          PRICING TABLE
        </h4>
        <h2 className='title' id='title-h2'>
          <b>Choose A Plan That’s right For You</b>
        </h2>
      </div>
      <div className='toggle-tab'>
        <span className='monthly'>Monthly</span>
        <label className='switch'>
          <input type='checkbox' />
          <span className='slider round'></span>
        </label>
        <span className='yearly'>Yearly</span>
      </div>
      <div className='row'>
        {plan.map((plan_item) => {
          return (
            <div className='col-lg-4 col-md-6 pt-3 plan-container'>
              <div className='card card-item' id='card-item'>
                <div className='card-body'>
                  <h2 className='card-title'>{plan_item.title}</h2>
                  <p className='card-text'>
                    <b>{plan_item.plan}</b>
                    <br />
                    <br />
                    <b>{plan_item.graphic}</b>
                    <br />
                    <br />
                    <b> {plan_item.web}</b>
                    <br />
                    <br />
                    <b> {plan_item.ui}</b>
                    <br />
                    <br />
                    <b>{plan_item.html} </b>
                    <br />
                    <br />
                    <b> {plan_item.SEO}</b>
                    <br />
                    <br />
                    <b>{plan_item.busniess}</b>
                  </p>
                  <button className='plan-btn'>
                    <b>Start now</b>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Plans;
