import React from 'react';
import Delete from '../../assets/delete.png';
import './cardOrder.css'


export default function CardOrder({ product, price, item ,onClick}) {

  return (
      <div className='product-order-list'>

        <div className='item-product'>
          <p>{item}</p>
          <p className='product'>{product}</p>
        </div>
        
        <div className='price-delete'  >
          <p><span>{price}</span></p>
          <figure onClick={onClick}>
            <img src={Delete} alt="delete"  />
          </figure>    
        </div>

      </div>
    )
}