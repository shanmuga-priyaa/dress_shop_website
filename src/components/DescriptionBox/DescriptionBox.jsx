import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews</div>
      </div>
      <div className="descriptionbox-description">
        <p>At Style Your Self, we believe that fashion is more than just clothing; it's a form of self-expression. Our curated collection of trendy dresses, stylish accessories, and everyday essentials caters to every individual's unique taste and lifestyle. Whether you're dressing up for a special occasion or looking for comfortable yet chic outfits for your daily adventures, we have something just for you</p>
        <p>Explore our exclusive collections, where quality meets affordability, and experience a shopping journey that's not only enjoyable but also tailored to empower your personal style. Join our community of fashion lovers and elevate your wardrobe today</p>
      </div>
    </div>
  )
}

export default DescriptionBox
