import React from 'react';
import Logout from '../../Components/Logout/logout';
import LogoBurger from '../../Components/Logo/logo';
// import AdminUser from '../../Components/adminUser/AdminUser';
import Icon from '../../assets/iconAdmin.png';
import EditAndDelete from '../../Components/userButtons/EditAndDelete';
import './administrator.css'



export default function Administrator() {
    const user = localStorage.getItem('token')

    return (
        <>
        <div className='global-container-Admi'>

            <header>
                <div className='box-text-logout'> 
                    <Logout text='Administrator' icon={Icon}/>
                </div>
                    <LogoBurger />
            </header>

            <main >
                <section className='content-general-products container'>

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
