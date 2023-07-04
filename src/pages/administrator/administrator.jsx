import React from 'react';
import { useState, useEffect } from 'react';
import Logout from '../../Components/Logout/logout';
import LogoBurger from '../../Components/Logo/logo';
import Icon from '../../assets/iconAdmin.png';
import IconAdd from '../../assets/addProduct.png';
import EditAndDelete from '../../Components/userButtons/EditAndDelete';
import './administrator.css'
import ModalAddProduct from '../../Components/modal/modalAddProduct';



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
                        <div><button
                            id='addProduct'
                            onClick={handleClickModalAddProduct}
                            className='btn-addProduct' >
                            <img src={IconAdd} className='icon-Add' alt="add" />Add product</button></div>
                        {showModalAddProduct && <ModalAddProduct cancel={cancel} />}


                        <h3 className='rolTitle'>Waiter</h3>
                        <ul className='content-cards-products'>
                            <EditAndDelete Name='American Coffe' />
                            <EditAndDelete Name='American Coffe' />
                            <EditAndDelete Name='American Coffe' />
                        </ul>

                        <h3 className='rolTitle'>Chef</h3>
                        <ul className='content-cards-products'>
                            <EditAndDelete Name='American Coffe' />
                            <EditAndDelete Name='American Coffe' />
                            <EditAndDelete Name='American Coffe' />
                        </ul>

                        <h3 className='rolTitle'>Administrator</h3>
                        <ul className='content-cards-products'>
                            <EditAndDelete Name='American Coffe' />
                            <EditAndDelete Name='American Coffe' />
                            <EditAndDelete Name='American Coffe' />
                        </ul>

                    </section>

                </main>
            </div>
        </>
    );
}
