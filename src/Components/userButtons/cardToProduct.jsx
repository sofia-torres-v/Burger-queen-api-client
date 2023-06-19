import React from "react"
import CardToAdmin from '../userButtons/cardToAdmin'


export default function cardToProduct({ Name }) {
    return (
        <section>
            <h3>break</h3>
            <CardToAdmin
                Name='Caffe con leche' />
            <h3>Lunch/Dinner</h3>
            <CardToAdmin
                Name='Hamburguesa Classica' />

        </section>

    )
}

