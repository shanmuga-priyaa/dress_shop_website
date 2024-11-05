import React from 'react';
import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className="offers-container">
      <div className='offers'>
        <div className='offers-left'>
          <h1>New Arrivals</h1>
          <h1>Offers for you</h1>
          <p>only on best sellers products</p>
          <div class="offer-button">
          <button>Click Me</button>
          </div> 
          </div>
        <div className='offers-right'> 
          <img src={exclusive_image} alt="Offers" />
        </div>
      </div>
    </div>
  );
};

export default Offers;
