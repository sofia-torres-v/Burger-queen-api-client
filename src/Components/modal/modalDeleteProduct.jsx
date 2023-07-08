import React from 'react';
import close from '../../assets/close.png';
import './modalDeleteProduct.css'
import Api from '../../api_client/api'

const ModalCancel = ({ handleClickCancel, cancel }) => {

    const token = localStorage.getItem('token');

    // llama a api para elimminar producto
    const deletetProduct = () => {
        Api().fetchDeleteProduct({ product, token });
        }



    return (
        <div className="modal">

            <div className="modal-content">

                <figure className='box-close' onClick={cancel} >
                    <img src={close} className='close' alt="close" />
                </figure>
                {/* agregar todo los datos del producto a eliminar */}

                <div className="modal-text-delete">
                    <br />
                    <h2>Do you want to eliminate ?</h2>
                    <p> Product:</p>
                    <p>Type:</p>
                    <p>Price:</p>
                </div>
                <button onClick={deletetProduct} className="btn-modal"> Continue </button>

            </div>

        </div>
    )
}

export default ModalCancel;