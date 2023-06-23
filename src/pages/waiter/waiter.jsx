import React from 'react';
import { useState, useEffect } from 'react';
import Logout from '../../Components/Logout/logout';
import LogoBurger from '../../Components/Logo/logo';
import Products from '../../Components/productsForWaiters/products';
import './waiter.css';
import api from '../../api_client/api';
import ProductList from '../../Components/productList/productList';
import './waiter.css'


export default function Menu() {

  const token = localStorage.getItem('token');

//  parametros: Valor actual y  función que actualiza el valor 
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


  //nombre del cliente con evento onChange
  const [firstName, setFirstName] = useState('');
  const [fullName, setFullName] = useState('');
  function manageNameChange(e) {
    setFirstName(e.target.value);
    setFullName(e.target.value);
  };

  //muestra desayuno o almuerzo
  const [mostrarProducts, setMostrarProducts] = useState("breakfast");
  const handleClick = (value) => {
    setMostrarProducts(value);
  };

  //productos seleccionados que se muestran en OrderList
  const [selectedProducts, setSelectedProducts] = useState([]);
  const handleClickProduct = (chosenProduct) => {
    setSelectedProducts([
      ...selectedProducts,
      chosenProduct
    ])
  }

  const contarTotalProductos = (selectedProducts) => {
    let total = 0;
    selectedProducts.forEach((product) => {
      total += product.price;
    });
    console.log(total);
    return total;
  }


  return (
    <>
      <section className='global-container-waiter'>
        <div className='fondo'>
        <Logout />
        <LogoBurger />
        </div>
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
                <div className='subtitle-list'>
                  <p className='subtitle-product'>Item</p>
                  <p className='subtitle-product'>Product</p>
                  <p className='subtitle-product'>Price</p>
                </div>
              {/* Contenido de la lista de pedidos */}
              <ProductList products={selectedProducts}>  </ProductList>
            </div>

            <div className='ticket-footer'>
              <p>Item:<span>01</span></p>
              <p><span>Total:{contarTotalProductos(selectedProducts)}</span> </p>
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