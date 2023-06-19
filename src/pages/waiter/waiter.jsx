import React from 'react';
import { useState } from 'react';

import Logout from '../../Components/Logout/logout';
import LogoBurger from '../../Components/logo/logo.jsx';
import CardElement from '../../Components/cardElement/cardElement';
import '../../Components/logo/logo.css'
import '../../Components/cardElement/cardElement.jsx'
import './waiter.css';


export default function Menu() {
  // async function appGet(pathname) {
  //   const token = localStorage.getItem("loginToken")
  //   const response = await fetch(`http://localhost:8080/${pathname}`, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //         'autorization': `Bearer${token}`
  //     });
  //     const ResData = await response.json()
  //     return ResData;
  // }

  //nombre del cliente
  const [firstName, setFirstName] = useState('');
  const [fullName, setFullName] = useState('');
  function manageNameChange(e) {
    setFirstName(e.target.value);
    setFullName(firstName);
  }


  return (
    <>
      <section className='global-container-waiter'>
           <Logout/> 
           <LogoBurger />

        <div className='container-columns1 container'>

          <div className='column-menu'>

            <div className='group-client'>
              {/* <label htmlFor=""> Client:</label> */}
              <input type="text" placeholder="Client's name" 
              id="inpClient"
              name="client"
              value={firstName}
              onChange={manageNameChange} />
            </div>

            {/* contenedor de los pedidos en general*/}
            <div className='content-order'>

              <h2 className='sub-title'>Menu option</h2>
              <div className='content-buttons'>
                <button className='btn-break active'>Breakfast</button>
                <button className='btn-lunch'>Lunch/Dinner</button>
              </div>

              <div className='content-list-breakfast'>
                {/* CardElement 1 */}
                <CardElement title="American Coffee" price="5" />
                {/* CardElement 2 */}
                <CardElement title="Coffee with Milk" price="7" />
                {/* CardElement 3 */}
                <CardElement title="Ham and Cheese Sandwich" price="5" />
                {/* CardElement 4 */}
                <CardElement title="Natural fruit juice" price="7" />
              </div>

              <div className='content-list-lunch'>
                {/* Contenido para el almuerzo/cena */}
              </div>
            </div>
          </div>

          {/* columna 2 */}
          <div className='column-ticket'>
            <div className='ticket-header'>
              <h2 className='ticket-subtitle'>Order List</h2>
              <p>Client:{fullName}</p>
            </div>

            <div className='ticket-body'>
              {/* Contenido de la lista de pedidos */}
            </div>

            <div className='ticket-footer'>
              <p>Item:<span>01</span></p>
              <p>Total:<span>$300</span></p>
            </div>

            <div className='ticket-btns'>
              <button className='ticket-enviar active'>Send</button>
              <button className='ticket-cancel'>Cancel</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}