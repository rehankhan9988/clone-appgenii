import React from "react";
import "./InputCard.css";
const InputCard = () => {
  return (
    <div className='container col-input'>
      <div className='row'>
        <div className='col-lg-8 col-sm-12 textcard'>
          <h1>Subscribe To Our Newsletter For Latest Update</h1>
        </div>
        <div className='col-lg-4 inputcard'>
          <input
            type='email'
            placeholder='your email here'
            className='input-inputcard'
          />
        </div>
      </div>
    </div>
  );
};

export default InputCard;
