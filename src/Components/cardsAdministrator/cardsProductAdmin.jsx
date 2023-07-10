import React from "react"
import EditAndDelete from '../../Components/userButtons/EditAndDelete';
import './cardsProductAdmin.css'


export default function cardproductAdmin({ products,handleClickDeleteProduct }) {
    return (
        <div className='list-product' >
            {products.map((product, index) => {
                // console.log(product)
                return <section key={index} className='content-text-btn' >
                    {product.name ? (
                        <p>{product.name}</p>
                    ) : (
                        <p>{product.email}</p>
                    )} <EditAndDelete onClick={() => handleClickDeleteProduct(product)}/>
                </section>

            })}


        </div>
    )
}