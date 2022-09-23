import React from "react";
import "./Quote.css";
const Quote = () => {
  return (
    <div className='quote-head'>
      <h4 className='quote-subtitle'>WE ARE THE BEST</h4>
      <h2 className='quote-title'>
        <b>
          We Provide Website Solution
          <br /> For You
        </b>
      </h2>
      <p className='quote-p'>
        Mauris in enim sollicitudin quam sollicitudin
        <br /> fermentum ut vitae massa. Donec venenatis <br />
        accumsan nisi, sit amet maximus velit euismod <br />
        sit amet. Vivamus et sem sed ipsum
        <br /> pretium lobortis non vitae sem.
      </p>
      <br />
      <button className='quote-btn'>Learn more</button>
    </div>
  );
};

export default Quote;
