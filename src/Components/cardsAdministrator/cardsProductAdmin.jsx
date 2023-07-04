import React from "react"
import EditAndDelete from '../../Components/userButtons/EditAndDelete';
import './cardsProductAdmin.css'


export default function cardproductAdmin({ products }) {
    return (
        <div className='list-product' >
            {products.map((product, index) => {
                // console.log(product)
                return <section key={index} >
                    {product.name} <EditAndDelete />
                </section>

            })}


        </div>
    )
}