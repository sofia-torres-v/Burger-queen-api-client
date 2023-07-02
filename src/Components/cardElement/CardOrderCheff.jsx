import React from 'react';
import './CardOrderCheff.css'

export default function CardOrderCheff({ status, client, items, time, text }) {

    return (

        <div className='card-order-cheff'>
            <p className='item'>{status}</p>
            <p className='text-cards-name'>Client: <span>{client}</span></p>

            <div>
                {items?.map((item, index) => {
                    return <div key={index}>

                      <div className='box-card'>
                        <div className='info-card'>
                            <p className='item-card' >Product: <span className='span-card'>{item?.product?.name}</span></p>
                            <p className='item-card' >Quantity: <span className='span-card'>{item.qty}</span></p>
                            <p className='item-card' >Type: <span className='span-card'>{item?.product?.type}</span></p>
                        </div>
                        <div className='img-card'>
                            <img src={item?.product?.image} />
                        </div>
                      </div>

                        <div className='time-attended'  >
                            <p>Time: <span>{time}</span></p>
                            <button className='btn-attended'>{text}</button>
                        </div>

                    </div>

                })}
            </div>


        </div >
    )
}