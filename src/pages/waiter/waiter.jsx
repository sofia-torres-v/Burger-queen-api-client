import React from 'react';
import { useState, useEffect } from 'react';
import Logout from '../../Components/Logout/logout';
import LogoBurger from '../../Components/Logo/logo';
import Products from '../../Components/productsForWaiters/products'
import './waiter.css';
import api from '../../api_client/api'


export default function Menu() {

  const token = localStorage.getItem('token');
  const [breakfasts, setBreakfasts] = useState([])
  const [lunches, setLunches] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      const result = await api().fetchProducts({ token });
      setBreakfasts(result.breakfasts);
      setLunches(result.lunches);
    }
    fetchProducts();
  }, [])

  //nombre del cliente
  const [firstName, setFirstName] = useState('');
  const [fullName, setFullName] = useState('');
  function manageNameChange(e) {
    setFirstName(e.target.value);
    setFullName(e.target.value);
  };
  const [mostrarProducts, setMostrarProducts] = useState("breakfast");
  const handleClick = (value) => {
    console.log(value);
    setMostrarProducts(value);
  };

  //productos seleccionados
  const [productosSeleccionados, setProductsSelecionados] = useState([]);
  const handleClickProduct = (productoSeleccionado) => {
    console.log(productoSeleccionado);
    setProductsSelecionados([
      ...productosSeleccionados,
      productoSeleccionado
    ])
    console.log('agregando producto', productoSeleccionado)
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
                <button onClick={() => handleClick('breakfast')} className='btn-break'>Breakfast</button>
                <button onClick={() => handleClick('lunch')} className='btn-lunch'>Lunch/Dinner</button>
              </div>

              {mostrarProducts === "lunch" ? < Products products={lunches} handleClickProduct={handleClickProduct} /> : <Products products={breakfasts} handleClickProduct={handleClickProduct} />}

            </div>

          </div>


          <div className='column-ticket'>

            <div className='ticket-header'>
              <h2 className='ticket-subtitle'>Order List</h2>
              <p>Client:{fullName}</p>
            </div>

            <div className='ticket-body'>
              {/* Contenido de la lista de pedidos */}
              <Products products={productosSeleccionados}>  </Products>
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