import React from 'react';
import close from '../../assets/close.png';

import './modal.css'
import './modalAddProduct.css'

const ModalAddProduct = ({ handleClickCancel, cancel }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <figure className="box-close" onClick={cancel}>
                    <img src={close} className="close" alt="close" />
                </figure>
                <label>Name:</label>
                <input type="text" placeholder="enter product name" />
                <label>type:</label>
                <select name="select" defaultValue="lunches">
                    <option value="breakfasts">Breakfasts</option>
                    <option value="lunches">Lunches</option>
                </select>
                <label>Price: $</label>
                <input type="number" placeholder="1000" />
                <label>Imagen: </label>
                <input type="text" placeholder="Enter URL" />

                <button  // onClick={handleClickCancel}
                    className="btn-add"
                >
                    Add
                </button>

            </div>
        </div>
    );
};

export default ModalAddProduct;