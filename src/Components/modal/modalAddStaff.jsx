import React from 'react';
import { useState } from 'react';
import close from '../../assets/close.png';
import './modalAddProduct.css'
import api from '../../api_client/api';

const ModalAddStaff = ({ cancel }) => {

    const token = localStorage.getItem('token');

    //llamo a la api para agregar usuario
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('waiter')


    const fetchCreateStaff = async (e) => {
        e.preventDefault()

        await api().fetchCreateStaff({ token, email, password, role });
        cancel();
    }

    return (
        <div className="modal-add">
            <div className="modal-content-staff">
                <p className="title-add" > Add staff</p>
                <figure className="box-close" onClick={cancel}>
                    <img src={close} className="close" alt="close" />
                </figure>

                <form className='content-item' onSubmit={fetchCreateStaff}>
                    <div className='item' >
                        <label className='label-text-input'>Email:</label>
                        <input className="inp-modal" onChange={(e) => setEmail(e.target.value)} type="text" placeholder="example@example.com" />
                    </div>

                    <div className='item'>
                        <label className='label-text-input'>Password: </label>
                        <input className="inp-modal" onChange={(e) => setPassword(e.target.value)} type="text" placeholder="********" />
                    </div>

                    <div>
                        <label className='label-text-input' >Role:</label>
                        <select className="inp-modal" name="select" defaultValue="waiter" onChange={(e) => setRole(e.target.value)} >
                            <option value="waiter">Waiter</option>
                            <option value="cheff">Cheff</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    <input type="submit" className="btn-add" value="Add" />
                </form>

            </div>
        </div>
    );
};

export default ModalAddStaff;