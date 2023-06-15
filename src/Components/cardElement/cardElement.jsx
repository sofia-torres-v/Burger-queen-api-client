import React from 'react';

export default function CardElement({ title, price }) {
  return (
    <div className='card-element'>
      <p>{title}</p>
      <div className='group-price'>
        <p>$ <span>{price}</span></p>
        <button className='btn-card'>Add</button>
      </div>
    </div>
  );
}