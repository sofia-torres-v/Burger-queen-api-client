import React from "react"
import CardToAdmin from '../userButtons/cardToAdmin'

export default function cardToStaff({ Name }) {
    return (
        <section>
            <h3>Waiter</h3>
            <CardToAdmin
                Name='Ana' />
            <h3>Cheff</h3>
            <CardToAdmin
                Name='Juana' />
            <h3>Admin</h3>
            <CardToAdmin
                Name='Luz' />
        </section>

    )
}


