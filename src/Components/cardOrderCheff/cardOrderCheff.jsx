import React from 'react';
import './cardOrderCheff.css'

export default function CardOrderCheff({ name, item, product, time,text}) {

  return (
      <div className='box-order-cheff'>
        <h2 className='name'>{name}</h2>

        <div className='item-product'>
            <p className='item'>{item}</p>
            <p className='product'>{product}</p>
        </div>
        
        <div className='time-attended'  >
            <p className='time'>{time}</p>
            <button className='btn-attended'>{text}</button>  
        </div>

      </div>
    )
}