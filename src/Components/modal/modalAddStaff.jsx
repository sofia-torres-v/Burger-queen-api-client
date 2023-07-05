import React from 'react';
import close from '../../assets/close.png';
import './modalAddProduct.css'

const ModalAddStaff = ({ cancel }) => {
    return (
        <div className="modal-add">

            <div className="modal-content-add">
                <p className="title-add" > Add staff</p>
                <figure className="box-close" onClick={cancel}>
                    <img src={close} className="close" alt="close" />
                </figure>
                <div className='content-item'>
                    <div className='item' >
                        <label>Email:</label>
                        <input className="inp-modal" type="text" placeholder="example@example.com" />
                    </div>
                    <div className='item'>
                        <label>Role:</label>
                        <select className="selec" name="select" defaultValue="waiter">
                            <option value="waiter">Waiter</option>
                            <option value="cheff">Cheff</option>
                            <option value="admin">Admin</option>
                        </select>

                    </div>
                    <div className='item'>
                        <label>Contraseña: </label>
                        <input className="inp-modal" type="text" placeholder="1000" />
                    </div>
                </div>
                <button
                    className="btn-add"
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default ModalAddStaff;