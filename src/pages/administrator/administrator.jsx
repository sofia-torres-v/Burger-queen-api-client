import React from 'react';
import { useState, useEffect } from 'react';
import api from '../../api_client/api';
import Logout from '../../Components/Logout/logout';
import LogoBurger from '../../Components/Logo/logo';
import ModalAddProduct from '../../Components/modal/modalAddProduct';
import CardProductAdmin from '../../Components/cardsAdministrator/cardsProductAdmin'
import ModalAddStaff from '../../Components/modal/modalAddStaff'
import Icon from '../../assets/iconAdmin.png';
import IconAdd from '../../assets/addProduct.png';
import AddStaff from '../../assets/addStaff.png';
import './administrator.css'

export default function Administrator() {
    const token = localStorage.getItem('token');

    //muestra desayuno o almuerzo
    const [mostrarProducts, setMostrarProducts] = useState('Product');
    const [isActive, setIsActive] = useState(true);
    const handleClick = (value) => {
        setMostrarProducts(value);
        //activa el color del botton 
        if (value === 'Product') {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    // muestra modal
    const [showModalAddProduct, setShowModalAddProduct] = useState(false);
    const handleClickModalAddProduct = () => {
        setShowModalAddProduct(true);
    }
    const [showModalAddStaff, setShowModalAddStaff] = useState(false);
    const handleClickModalAddStaff = () => {
        setShowModalAddStaff(true);
    }

    //cierra modal
    const cancel = () => {
        setShowModalAddProduct(false);
        setShowModalAddStaff(false);
    }

    const [userAdmin, setUserAdmin] = useState([]);
    const [userWaiter, setUserWaiter] = useState([]);
    const [userCheff, setUserCheff] = useState([]);
    //llamar a la api para traer a los usuarios
    useEffect(() => {
        async function fetchShowUsers() {
            const result = await api().fetchShowUsers({ token });
            setUserAdmin(result.admin);
            setUserWaiter(result.waiter);
            setUserCheff(result.cheff);
        }
        fetchShowUsers();
    }, [])

    //llama a la api para traer los productos
    const [breakfasts, setBreakfasts] = useState([])
    const [lunches, setLunches] = useState([])
    useEffect(() => {
        async function fetchProducts() {
            const result = await api().fetchProducts({ token });
            setBreakfasts(result.breakfasts);
            setLunches(result.lunches);
        }
        fetchProducts();
    }, [])

    return (
        <>
            <div className='global-container-Admi'>
                <header>
                    <div className='box-text-logout'>
                        <Logout text='Administrator' icon={Icon} />
                    </div>
                    <LogoBurger />
                </header>

                <main >

                    <section className='content-general-products container'>

                        <div>
                            <div className='content-buttons'>
                                <button
                                    id='product'
                                    onClick={() => handleClick('Product')}
                                    className={`btn-product ${isActive && 'active'}`}>Product</button>
                                <button
                                    id='staff'
                                    onClick={() => handleClick('Staff')}
                                    className={`btn-staff ${!isActive && 'active'}`}>Staff</button>
                            </div>
                            {mostrarProducts === "Product" ?
                                <> <div className='content-add' >
                                    <button
                                        id='addProduct'
                                        onClick={handleClickModalAddProduct}
                                        className='btn-addProduct' >
                                        <img src={IconAdd} className='icon-add-product' alt="add-product" />Add product</button></div>
                                    {showModalAddProduct && <ModalAddProduct cancel={cancel} />}

                                    <div>
                                        <h3 className='rolTitle'>Breakfasts</h3>
                                        <ul className='content-cards-products'>
                                            <CardProductAdmin products={breakfasts} />

                                        </ul>

                                        <h3 className='rolTitle'>Lunches</h3>
                                        <ul className='content-cards-products'>
                                            <CardProductAdmin products={lunches} />
                                        </ul>
                                    </div></> :
                                <><div div className='content-add'>
                                    <button
                                        id='addProduct'
                                        onClick={handleClickModalAddStaff}
                                        className='btn-addProduct' >
                                        <img src={AddStaff} className='icon-add-staff' alt="add-staff" />Add staff</button></div>
                                    {showModalAddStaff && <ModalAddStaff cancel={cancel} />}

                                    <div>
                                        <h3 className='rolTitle'>Waiter</h3>
                                        <ul className='content-cards-products'>
                                            <CardProductAdmin products={userWaiter} />
                                        </ul>

                                        <h3 className='rolTitle'>Chef</h3>
                                        <ul className='content-cards-products'>
                                            <CardProductAdmin products={userCheff} />
                                        </ul>

                                        <h3 className='rolTitle'>Administrator</h3>
                                        <ul className='content-cards-products'>
                                            <CardProductAdmin products={userAdmin} />
                                        </ul>
                                    </div></>
                            }

                        </div>
                    </section>

                </main>
            </div>
        </>
    );
}
