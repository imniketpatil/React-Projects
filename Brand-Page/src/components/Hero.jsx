import React from "react";

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="second-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Available On</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-icon" />
            <img src="/images/flipkart.png" alt="amazon-icon" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="" />
      </div>
    </main>
  );
};

export default Hero;
