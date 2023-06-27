import React from 'react';
import { useState, useEffect } from 'react';
import Logout from '../../Components/Logout/logout';
import LogoBurger from '../../Components/Logo/logo';
import Products from '../../Components/productsForWaiters/products';
import './waiter.css';
import api from '../../api_client/api';
import ProductList from '../../Components/productList/productList';
import Modal from '../../Components/modal/modal';
import Icon from '../../assets/iconWaiter.png';
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
  const [isActive, setIsActive] = useState(true);
  const handleClick = (value) => {
    setMostrarProducts(value);
    //activa el color del botton 
    if (value === 'breakfast') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  //productos seleccionados que se muestran en OrderList
  const [selectedProducts, setSelectedProducts] = useState([]);
  const handleClickProduct = (chosenProduct) => {
    setSelectedProducts([
      ...selectedProducts,
      chosenProduct
    ])
  }

  // suma el precio total de productos
  const contarTotalProductos = (selectedProducts) => {
    let total = 0;
    selectedProducts.forEach((product) => {
      total += parseFloat(product.price);
    });
    // console.log(total);
    return total;
  }
  // suma los Items
  const contarTotalItems = (selectedProducts) => {
    return selectedProducts.length
  }

  // Borrar producto de orderList
  const handleClickRemover = (productIndex) => {
    setSelectedProducts(prevSelectedProducts =>
      prevSelectedProducts.filter((product, index) => index !== productIndex));
  }

  // Borrar producto de orderList
  const handleClickCancel = () => {
    setFullName('');
    setFirstName('');
    setSelectedProducts([]);
  }

  // enviar lista de pedidos a cocina
  const [orderSent, setOrderSent] = useState([]);
  const sendOrderToKitchen = async () => {
    await api().fetchSendOrder(selectedProducts, token);
    setOrderSent(selectedProducts);
    setFullName('');
    setFirstName('');
    setSelectedProducts([]);
    // Muestra el modal al enviar el pedido
    setShowModal(true);
  };


  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    // Oculta el modal al hacer clic en "OK"
    setShowModal(false);
  };
 
  
  return (
    <>
      <section className='global-container-waiter'>
        <div>
          <Logout text='Waiter' icon={Icon} />
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
                <button
                  id='break'
                  onClick={() => handleClick('breakfast')}
                  className={`btn-break ${isActive && 'active'}`}>Breakfast</button>
                <button
                  id='lunch'
                  onClick={() => handleClick('lunch')}
                  className={`btn-lunch ${!isActive && 'active'}`}>Lunch/Dinner</button>
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
              <ProductList products={selectedProducts} handleClickRemover={handleClickRemover} >  </ProductList>
            </div>

            <div className='ticket-footer'>
              <p>Item:<span> {contarTotalItems(selectedProducts)}</span></p>
              <p>Total $:<span>{`${contarTotalProductos(selectedProducts)}`} </span> </p>
            </div>

            <div className='ticket-btns'>
              <button className='ticket-enviar active' onClick={sendOrderToKitchen}>Send to kitchen</button>
              {orderSent && <p>Order sent to the kitchen!</p>}
              {showModal && <Modal close={closeModal} />}
              <button onClick={handleClickCancel} className='ticket-cancel'>Cancel</button>
            </div>
          </div>

        </div>

      </section>
    </>
  );
}