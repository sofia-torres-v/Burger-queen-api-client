import React from "react"


export default function cardToAdmin({ Name}){
    return (
        <section>
                <h1> {Name} </h1>
                <div>
                    <button> Edit </button>
                    <button> Delete </button>
                </div>
        </section>

    )
}


