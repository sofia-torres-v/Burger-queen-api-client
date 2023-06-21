import React from 'react';
import { useState, useEffect } from 'react';
import Logout from '../../Components/Logout/logout';
import LogoBurger from '../../Components/Logo/logo';
import Products from '../../Components/productsForWaiters/products'
import './waiter.css';
import productFetcher from '../../api_client/api'


export default function Menu() {

  const token = localStorage.getItem('token');
  const { breakfasts, lunches } = productFetcher({ token });

  //nombre del cliente
  const [firstName, setFirstName] = useState('');
  const [fullName, setFullName] = useState('');
  function manageNameChange(e) {
    setFirstName(e.target.value);
    setFullName(e.target.value);
  };
  const [mostrarProducts, setMostrarProducts] = useState(false);
  const handleClick = () => {
    setMostrarProducts(!mostrarProducts);
  };

  //productos seleccionados
  const [productosSeleccionados, setProductsSelecionados] = useState([]);
  const handleClickProduct = (productoSeleccionado) => {
    setProductsSelecionados([
      ...productosSeleccionados,
      productoSeleccionado
    ])
    console.log('agregando producto' , productosSeleccionados)
  }


  return (
    <>
      <section className='global-container-waiter'>
        <Logout />
        <LogoBurger />

        <div className='container-columns1 container'>

          <div className='column-menu'>
            <div className='group-client'>
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

              {mostrarProducts ? < Products products={lunches} handleClickProduct={handleClickProduct}  /> : <Products products={breakfasts} handleClickProduct={handleClickProduct} />}

            </div>

          </div>


          <div className='column-ticket'>

            <div className='ticket-header'>
              <h2 className='ticket-subtitle'>Order List</h2>
              <p>Client:{fullName}</p>
            </div>

            <div className='ticket-body'>
              {/* Contenido de la lista de pedidos */}
              <p productos={productosSeleccionados}>  </p>
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