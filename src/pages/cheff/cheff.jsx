import React from 'react';
import { useState, useEffect } from 'react';
import Logout from '../../Components/Logout/logout';
import LogoBurger from '../../Components/Logo/logo';
import Icon from '../../assets/iconCheff.png';
import './cheff.css'
import CardListProductCheff from '../../Components/cardOrderCheff/cardListProductCheff'
import api from '../../api_client/api';


export default function Cheff() {
    const token = localStorage.getItem('token');
    const [orders, setOrders] = useState([]);
    //llamar a la api con los productos
    useEffect(() => {
        async function fetchGetOrder() {
            const result = await api().fetchGetOrder({ token });
            setOrders(result);
        }
        fetchGetOrder();
    }, [])
    console.log('lista de productos***', orders)

    // const [orderId, setOrdeId] = useState([])
    // const [orderStatus, setOrderStatus] = useState([])
    // //llamar a la api para editar los productos que ya tienes en la - Const order -
    // const changeStatus = async () => {
    //     const result = await api().changeStatus(order);
    //     setOrdeId(result.id);
    //     setOrderStatus(result.id);
    // }
    // console.log('--Id--', orderId, '--Status--', orderStatus)





    return (
        <>
            <section className='global-container-cheff '>
                <header>
                    <div className='box-text-logout'>
                        <Logout text='Cheff' icon={Icon} />
                        <LogoBurger />
                    </div>
                </header>

                <main>
                    <div className='container-column-cheff container'>

                        <div className='first-column'>
                            <h2 className='title-columns-cheff'>Orders for kitchen</h2>
                                <CardListProductCheff orders={orders} />
                        </div>

                        <div className='second-column'>
                            <h2 className='title-columns-cheff'>Order served</h2>
                                <CardListProductCheff orders={orders} />
                        </div>

                    </div>
                </main>

            </section>

        </>
    )
}