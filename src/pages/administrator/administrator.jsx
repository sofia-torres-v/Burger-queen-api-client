import React from 'react';
import Logout from '../../Components/Logout/logout';
import AdminUser from '../../Components/adminUser/AdminUser';


export default function Administrator() {

    const user = localStorage.getItem('token')


    return (
        <>
            <section className="global-container">
                <Logout />
                <AdminUser />
                
            </section>
        </>
    );
}
