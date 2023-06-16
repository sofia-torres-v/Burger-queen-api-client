import React from "react";
import CardToAdmin from "./cardToAdmin";

export default function AdminUser() {

    const user = localStorage.getItem('token')


    return (
        <>
            <div className='cardAdd'>
                <div>
                    <button>Product </button>
                    <button>Staff</button>
                </div>

                <section className="btnContainerCreate" >
                    <button type="button" className="btnCreate" >Crear usuario </button>
                </section>
                
                <div>
                    <h3>Waiter</h3>
                    <CardToAdmin
                        Name='Ana' />
                    <h3>Cheff</h3>
                    <CardToAdmin
                        Name='Sofia' />
                    <h3>Admin</h3>
                    <CardToAdmin
                        Name='Clau' />
                </div>


            </div>
        </>
    );
}
