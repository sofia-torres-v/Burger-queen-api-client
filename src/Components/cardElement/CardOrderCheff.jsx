import React from 'react';
import './CardOrderCheff.css'

export default function CardOrderCheff({ status, client, items, time, text }) {

    return (

        <div className='card-order-cheff'>
            <p className='item'>{status}</p>
            <h2 className='name'>{client}</h2>

            <div className='item-product'>
                {items?.map((item, index) => {
                    return <div key={index}>

                        <p>{item.qty}</p>
                        <p className='product'>{item?.product?.name}</p>
                        <img src={item?.product?.image} />
                        <p> {item?.product?.type}</p>
                    </div>

                })}
            </div>

            <div className='time-attended'  >
                <p className='time'>{time}</p>
                <button className='btn-attended'>{text}</button>
            </div>

        </div >
    )
}