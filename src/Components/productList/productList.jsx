import React from 'react';
import CardOrder from '../../Components/cardOrder/cardOrder'
import './productList.css'


export default function ProductList({ products ,handleClickRemover }) {

    return (

        <div className='content-product-list' >
            {products.map((product,index) => {
                return <CardOrder 
                product={product.name}
                key={index}
                item={index + 1}
                price={product.price}
                // quantity={1}
                onClick={() => handleClickRemover(index)}
                />
                
            })}
        </div>
    )
}