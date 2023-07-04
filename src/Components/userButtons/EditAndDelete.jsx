import React from "react"
import './EditAndDelete.css'


export default function EditAndDelete({ Name }) {
    return (
            <div className="content-btns">
                <button className="list-btn-edit"> Edit </button>
                <button className="list-btn-delete"> Delete </button>
            </div>
    )
}