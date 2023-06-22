import React from "react"
import CardElement from '../cardElement/cardElement';
import './products.css'



export default function products({ products }) {
    return (
        <div className='content-list-CardOrder' >
            {products.map((product) => {
                return <CardElement title={product.name} key={product.id} price={product.price}   />
            //se borro de la linea 11  :onClick={() => handleClickProduct(product)}
            })}
        </div>
    )
}