import React from 'react';
import { useState } from 'react';
import Logout from '../../Components/Logout/logout';
import LogoBurger from '../../Components/logo/logo';
import ProductsBreakfast from '../../Components/productsForWaiters/productsBreakfast';
import ProductsLunch from '../../Components/productsForWaiters/productsLunch'
import './waiter.css';



export default function Menu() {

  const token = localStorage.getItem('token');
  console.log(token);
  // const showProducts = (data) => {
  fetch('http://localhost:8080/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`,
    }
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log('La data es:', data);
    })



  //nombre del cliente
  const [firstName, setFirstName] = useState('');
  const [fullName, setFullName] = useState('');
  function manageNameChange(e) {
    setFirstName(e.target.value);
    setFullName(firstName);
  };


  const [mostrarProductsLunch, setMostrarProductsLunch] = useState(false);
  const handleClick = () => {
    setMostrarProductsLunch(!mostrarProductsLunch);
  };

  return (
    <>
      <section className='global-container-waiter'>
        <Logout />
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
                <button onClick={handleClick} className='btn-break active'>Breakfast</button>
                <button onClick={handleClick} className='btn-lunch'>Lunch/Dinner</button>
              </div>

              {mostrarProductsLunch ? < ProductsLunch /> : <ProductsBreakfast />}
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