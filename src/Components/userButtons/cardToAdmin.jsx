import React from "react"



export default function cardToAdmin({ Name }) {
    return (
        <section>
            <h2> {Name} </h2>
            <div>
                <button> Edit </button>
                <button> Delete </button>
            </div>
        </section>

    )
}