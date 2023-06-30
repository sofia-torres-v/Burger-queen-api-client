import React from 'react';
import './cardElement.css'


export default function CardElement({ title, image, price, onClick }) {

  return (
    <section className='card-element'>
      <p>{title}</p>
      <img src={image} />
      <div className='group-price'>
        <p>$ <span>{price}</span></p>
        <button onClick={onClick} className='btn-card' >Add</button>
      </div>
    </section>
  );
}