import React from 'react';
import { useState, useEffect } from 'react';
import Logout from '../../Components/Logout/logout';
import LogoBurger from '../../Components/Logo/logo';
import Icon from '../../assets/iconCheff.png';
import './cheff.css'
import CardOrderCheff from '../../Components/cardOrderCheff/cardOrderCheff'
import api from '../../api_client/api';


export default function Cheff() {


    const token = localStorage.getItem('token');
    const selectedProducts = localStorage.getItem('selectedProducts'); // esto esta mal tengo que llamar a la api
    console.log(token)
    console.log(selectedProducts)
    //llamar a la api con los productos
    const [order, setOrder] = useState([])

    useEffect(() => {
        async function fetchSendOrder() {
            const result = await api().changeStatus(selectedProducts, token);
            setOrder(selectedProducts);
        }
        fetchSendOrder();
    }, [])

    //llamar a la api para editar los productos que ya tienes en la - Const order -

    console.log(order)





    return (
        <>
            <div className='global-container-cheff'>
                <header>
                    <div className='box-text-logout'>
                        <Logout text='Cheff' icon={Icon} />
                    </div>
                    <LogoBurger />
                </header>

                <main>
                    <CardOrderCheff />

                </main>



            </div>

        </>
    )
}