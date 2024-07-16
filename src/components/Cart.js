import React from 'react'
import './Cart.css'

const cart = (props) => {
    const { image, name, price } = props;
  return (
    <div className="main">
      <div>
        <h1>{name}</h1>
        <img src={image} />
        <p> ₹ {price}</p>
      </div>

      <button>Buy Now</button>
    </div>
  );
}

export default cart