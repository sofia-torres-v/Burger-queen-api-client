import React from "react"
import CardElement from '../cardElement/cardElement';
import './products.css'



export default function products({ products, handleClickProduct }) {
    return (
        <div className='content-list-breakfast' >
            {products.map((product) => {
                return <CardElement title={product.name} key={product.id} price={product.price} image={product.image} handleClickProduct={handleClickProduct} />
            })}
        </div>
    )
}