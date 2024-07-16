import React from 'react'
import './Cart.css'

const cart = (props) => {
  return (
    <div className="main">
      <div>
        <h1>{props.name}</h1>
        <img src={props.image} />
        <p>{props.price}</p>
      </div>

      <button>Buy Now</button>
    </div>
  );
}

export default cart