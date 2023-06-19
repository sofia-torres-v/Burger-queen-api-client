import React from "react"
import CardElement from '../../Components/cardElement/cardElement';

export default function productsLunch({products}) {


    return (
        <div className='content-list-breakfast'>
            {products.map((lunch) => {
                return <CardElement title={lunch.name} price={lunch.price} />
            })}
        </div>
    )
}