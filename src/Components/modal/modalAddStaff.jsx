import React from 'react';
import close from '../../assets/close.png';
import './modal.css'
import './modalAddProduct.css'

const ModalAddStaff = ({ cancel }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <figure className="box-close" onClick={cancel}>
                    <img src={close} className="close" alt="close" />
                </figure>
                <label>Email:</label>
                <input type="text" placeholder="example@example.com" />
                <label>Role:</label>
                <select name="select" defaultValue="waiter">
                    <option value="waiter">Waiter</option>
                    <option value="cheff">Cheff</option>
                    <option value="admin">Admin</option>
                </select>
                <label>Contraseña: </label>
                <input type="text" placeholder="1000" />
                
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