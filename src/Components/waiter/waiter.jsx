import '../waiter/waiter.css'
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

                <div className='container-columns1  container'>

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
                                <div className='card-element'>
                                    <p>American Coffee</p>
                                    <div className='group-price'>
                                        <p>$ <span>5</span></p>
                                        <button className='btn-card'>Add</button>
                                    </div>
                                </div>

                                <div className='card-element'>
                                    <p>Coffee with Milk</p>
                                    <div className='group-price'>
                                        <p>$ <span>7</span></p>
                                        <button className='btn-card'>Add</button>
                                    </div>
                                </div>

                                <div className='card-element'>
                                    <p>Ham and Cheese Sandwich</p>
                                    <div className='group-price'>
                                        <p>$ <span>5</span></p>
                                        <button className='btn-card'>Add</button>
                                    </div>
                                </div>

                                <div className='card-element'>
                                    <p>Natural fruit juice</p>
                                    <div className='group-price'>
                                        <p>$ <span>7</span></p>
                                        <button className='btn-card'>Add</button>
                                    </div>
                                </div>


                            </div>


                            <div className='content-list-lunch'>

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


                        </div>

                        <div className='ticket-footer'>
                            <p>Item:<span>01</span></p>
                            <p>Total:<span>$300</span></p>
                        </div>

                        <div className='ticket-btns'>
                            <button className='ticket-enviar active'>Send</button>
                            <button className='ticket-cancel '>Cancel</button>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}