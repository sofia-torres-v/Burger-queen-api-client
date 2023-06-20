import React from "react"
import './EditAndDelete.css'


export default function EditAndDelete({ Name }) {
    return (

        <li className="list-content">

            <span className="list-subtitle">{Name}</span>
            <div className="list-content-btn">
                 <button className="list-btn-edit"> Edit </button>
                 <button className="list-btn-delete"> Delete </button>
            </div>

        </li>
    )
}