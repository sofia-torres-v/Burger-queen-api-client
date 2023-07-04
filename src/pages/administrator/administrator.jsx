import React from 'react';
import { useState, useEffect } from 'react';
import Logout from '../../Components/Logout/logout';
import LogoBurger from '../../Components/Logo/logo';
import Icon from '../../assets/iconAdmin.png';
import IconAdd from '../../assets/addProduct.png';
import './administrator.css'
import ModalAddProduct from '../../Components/modal/modalAddProduct';
import api from '../../api_client/api';
import CardProductAdmin from '../../Components/cardsAdministrator/cardsProductAdmin'

export default function Administrator() {
    const user = localStorage.getItem('token')


    //muestra desayuno o almuerzo
    const [mostrarProducts, setMostrarProducts] = useState("Product");
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
    //cierra modal
    const cancel = () => {
        setShowModalAddProduct(false);
    }

    const [userAdmin, setUserAdmin] = useState([]);
    const [userWaiter, setUserWaiter] = useState([]);
    const [userCheff, setUserCheff] = useState([]);
    const token = localStorage.getItem('token');

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
            // console.log(result);  
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
                            {/* {mostrarProducts === "Product" ? < Products products={lunches} handleClickProduct={handleClickProduct} /> : <Products products={breakfasts} handleClickProduct={handleClickProduct} />} */}
                        </div>
                        <div><button
                            id='addProduct'
                            onClick={handleClickModalAddProduct}
                            className='btn-addProduct' >
                            <img src={IconAdd} className='icon-Add' alt="add" />Add product</button></div>
                        {showModalAddProduct && <ModalAddProduct cancel={cancel} />}


                        <h3 className='rolTitle'>Breakfasts</h3>
                        <ul className='content-cards-products'>
                            <CardProductAdmin products={breakfasts} />

                        </ul>

                        <h3 className='rolTitle'>Lunches</h3>
                        <ul className='content-cards-products'>
                            <CardProductAdmin products={lunches} />
                        </ul>

                        {/* <h3 className='rolTitle'>Waiter</h3>
                        <ul className='content-cards-products'>
                            <Cardproducts  products={breakfasts} /> 
                        
                        </ul>

                        <h3 className='rolTitle'>Chef</h3>
                        <ul className='content-cards-products'>
                        <Cardproducts  products={breakfasts} /> 
                        </ul> */}

                        {/* <h3 className='rolTitle'>Administrator</h3>
                        <ul className='content-cards-products'>
                            <EditAndDelete orders={userAdmin} />
                        </ul> */}

                    </section>

                </main>
            </div>
        </>
    );
}
