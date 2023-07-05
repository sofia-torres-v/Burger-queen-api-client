import React from 'react';
import close from '../../assets/close.png';
import './modalAddProduct.css'

const ModalAddProduct = ({ handleClickCancel, cancel }) => {
    return (
        <div className="modal-add">

            <div className="modal-content-add">
                <p className="title-add" > Add product</p>
                <figure className="box-close" onClick={cancel}>
                    <img src={close} className="close" alt="close" />
                </figure>
                <div className='content-item'>
                    <div className='item' >
                        <label>Name:</label>
                        <input className="inp-modal" type="text" placeholder="enter product name" />
                    </div>
                    <div className='item'>
                        <label>type:</label>
                        <select className="selec" name="select" defaultValue="lunches">
                            <option value="breakfasts">Breakfasts</option>
                            <option value="lunches">Lunches</option>
                        </select>
                    </div>
                    <div className='item'>
                        <label>Price: $</label>
                        <input className="inp-modal" type="number" placeholder="1000" />
                    </div>
                    <div className='item'>
                        <label>Imagen: </label>
                        <input className="inp-modal" type="text" placeholder="Enter URL" />
                    </div>
                </div>

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