import React from 'react';
import { useState } from 'react';
import close from '../../assets/close.png';
import './modalAddProduct.css'
import api from '../../api_client/api';

const ModalAddProduct = ({ cancel }) => {

    const token = localStorage.getItem('token');

    //llamo a la api para agregar producto
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [type, setType] = useState('Desayuno')
    const [image, setImage] = useState('')

    const fetchCreateProduct = async (e) => {
        e.preventDefault()
        await api().fetchCreateProduct({ token, name, price, type, img: image });
        cancel();
    }


    return (
        <div className="modal-add">
            <div className="modal-content-add">
                <p className="title-add" > Add product</p>
                <figure className="box-close" onClick={cancel}>
                    <img src={close} className="close" alt="close" />
                </figure>
                
                <form className='content-item' onSubmit={fetchCreateProduct}>
                    <div className='item' >
                        <label>Name:</label>
                        <input className="inp-modal" type="text" onChange={(e) => setName(e.target.value)} placeholder="enter product name" />
                    </div>

                    <div className='item'>
                        <label>type:</label>
                        <select className="selec" name="select" defaultValue="Desayuno" onChange={(e) => setType(e.target.value)}>
                            <option value="Desayuno">Breakfast</option>
                            <option value="Almuerzo">Lunch</option>
                        </select>
                    </div>
                    <div className='item'>
                        <label>Price: $</label>
                        <input className="inp-modal" type="number" placeholder="1000" onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className='item'>
                        <label>Imagen: </label>
                        <input className="inp-modal" type="text" placeholder="Enter URL" onChange={(e) => setImage(e.target.value)} />
                    </div>
                    <input type="submit" className="btn-add" value="Add" />
                </form>



            </div>
        </div>
    );
};

export default ModalAddProduct;