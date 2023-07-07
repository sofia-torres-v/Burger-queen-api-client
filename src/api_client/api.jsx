const api = () => {
    // Valida el correo y contraseña del usuario
    const login = async (email, password) => {
        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            if (response.ok) {
                return await response.json();
            } 
        } catch (error) {
            throw new Error('Oops! That username and password combination is incorrect. Please try again.');
        }
    };


    // accedemos a los productos de la Api
    const fetchProducts = async ({ token }) => {
        try {
            const response = await fetch('http://localhost:8080/products', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`,
                }
            })
            if (response.ok) {
                const products = await response.json();
                // console.log(products);

                return {
                    breakfasts: products.filter(item => item.type === 'Desayuno'),
                    lunches: products.filter(item => item.type === 'Almuerzo'),
                };

            } else {
                throw Error('ERROR: token invalido');
            }


        } catch (error) {
            throw error
        }
    };



    // Enviar lista de pedidos  a la Api
    const fetchSendOrder = async (order, token) => {
        try {
            const response = await fetch('http://localhost:8080/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(order)
            })
            if (response.ok) {
                console.log('La orden se envió correctamente')
                return order
            } else {
                console.log('Hubo un error al enviar la orden')
            }
        } catch (error) {
            // console.log(error,'Error de la solicitud HTTP')
        }
    };

    // trae lista de pedidos  a la Api
    const fetchGetOrder = async ({ token }) => {
        try {
            const response = await fetch('http://localhost:8080/orders', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            if (response.ok) {
                const listProducts = await response.json();
                console.log('la lista se trajo correctamente')
                return {
                    pending: listProducts.filter(item => item.status === 'pending'),
                    delivery: listProducts.filter(item => item.status === 'delivery'),
                }
            } else {
                console.log('Hubo un error al traer la orden')
            }
        } catch (error) {
            console.log(error, 'Error de la solicitud HTTP')
        }
    };

    //Cambiando el estado de la orden 
    const changeStatus = async (order, status, token) => {
        try {
            const response = await fetch(`http://localhost:8080/orders/${order.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    status: status,
                    dateProcessed: new Date(),
                })
            })
            if (response.ok) {
                const orders = await response.json();
                return orders

            } else {
                console.log('algo salio mal')
            }
        } catch (err) {
            // console.log(err, 'Error de la solicitud HTTP')
        }

    }


        // traer usuarios 
        const fetchShowUsers = async ({ token }) => {
            try {
                const response = await fetch('http://localhost:8080/users', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': `Bearer ${token}`,
                    }
                })
                if (response.ok) {
                    const users = await response.json();
                    // console.log(products);
    
                    return {
                        admin: users.filter(item => item.role === 'admin'),
                        waiter: users.filter(item => item.role === 'waiter'),
                        cheff: users.filter(item => item.role === 'cheff'),
                    };
    
                } else {
                    // throw Error('ERROR: token invalido');
                }
    
    
            } catch (error) {
                throw error
            }
        };
    

    return {
        fetchProducts,
        login,
        fetchSendOrder,
        fetchGetOrder,
        changeStatus,
        fetchShowUsers
    }
}

export default api