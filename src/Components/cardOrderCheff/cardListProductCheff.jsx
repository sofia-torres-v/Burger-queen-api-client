import React from 'react';

import CardListProductCheff from '../cardElement/CardOrderCheff'
import './cardListProductCheff.css'

export default function cardListProductCheff({ orders }) {
  return (
    <div className='box-order-cheff'>
      {orders.map((order, index) => {
        return <CardListProductCheff
          client={order.client}
          key={index}
          items={order.products}
          status='pending'
          time= {new Date(Date.now()).toLocaleTimeString()}
          text='to attend' />
      })}

    </div>
  )
}
