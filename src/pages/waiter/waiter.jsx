import React from 'react';
import CardElement from '../../Components/cardElement/cardElement';
import '../waiter/waiter.css';
import LogoMenu from '../../assets/logoBurger.png';
import out from '../../assets/out.png';

export default function Menu() {
  return (
    <>
      <section className='global-container section'>
        <figure>
          <img src={out} className='out' alt="logo" />
        </figure>

        <figure className='content-logo1 waiter'>
          <img src={LogoMenu} alt="logo" />
        </figure>

        <div className='container-columns1 container'>
          {/* columna 1 */}
          <div className='column-menu'>
            {/* contendedor del input del cliente */}
            <div className='group-client'>
              <label htmlFor=""> Client:</label>
              <input type="text" />
            </div>

            {/* contenedor de los pedidos en general*/}
            <div className='content-order'>
              <div className='content-buttons'>
                <button className='btn-break active'>Breakfast</button>
                <button className='btn-lunch'>Lunches/Dinners</button>
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
              <p>Client:</p>
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

