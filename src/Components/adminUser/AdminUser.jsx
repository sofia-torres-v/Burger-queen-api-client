// import React from "react";
// import { useState } from 'react';
// import CardToProduct from "../userButtons/cardToProduct";
// import CardToStaff from "../userButtons/cardToStaff";
// import Logout from "../Logout/logout";
// import LogoBurger from "../logo/logo";

// export default function AdminUser() {

//     const user = localStorage.getItem('token')

//     const [mostrarStaff, setMostrarStaff] = useState(false);
//     const handleClick = () => {
//         setMostrarStaff(!mostrarStaff);
//     };

//     return (
//         <>
//             <Logout />
//             <LogoBurger />
//             <div className='cardAdd'>
//                 <div>
//                     <button onClick={handleClick}>Product </button>
//                     <button onClick={handleClick}>Staff</button>
//                 </div>

//                 <section className="btnContainerCreate" >
//                     <button type="button" className="btnCreate" >Crear usuario </button>
//                 </section>
//                 {mostrarStaff ? < CardToStaff /> : <CardToProduct />}
//             </div>
//         </>
//     );
// }