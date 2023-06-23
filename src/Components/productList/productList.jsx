import React from 'react';
import CardOrder from '../../Components/cardOrder/cardOrder'




export default function ProductList({ products }) {
    return (
        <div className='content-product-list' >
            {products.map((product,index) => {
                return <CardOrder 
                product={product.name}
                key={index}
                item={index}
                price={product.price}
                />
                // se retiro  onClick={() => handleClickProduct(products)}
            })}
        </div>
    )
}