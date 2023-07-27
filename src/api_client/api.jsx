const api = () => {
    // Valida el correo y contraseña del usuario
    const login = async (email, password) => {
        try {
            const response = await fetch('https://burger-queen-mock.onrender.com/login', {
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
            // console.log(error);
            throw new Error('Oops! That username and password combination is incorrect. Please try again.');
        }
    };


    // Accedemos a los productos de la Api
    const fetchProducts = async ({ token }) => {
        try {
            const response = await fetch('https://burger-queen-mock.onrender.com/products', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
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
    const fetchSendOrder = async (orderDate, token) => {
        try {
            const response = await fetch('https://burger-queen-mock.onrender.com/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(orderDate)
            })
            if (response.ok) {
                return orderDate
            }
        } catch {
            throw new Error('Error de la solicitud HTTP');
        }
    };


    // Trae lista de pedidos  a la Api
    const fetchGetOrder = async ({ token }) => {
        try {
            const response = await fetch('https://burger-queen-mock.onrender.com/orders', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            if (response.ok) {
                const listProducts = await response.json();
                // console.log('la lista se trajo correctamente')
                return {
                    pending: listProducts.filter(item => item.status === 'pending'),
                    delivery: listProducts.filter(item => item.status === 'delivery'),
                }
            } else {
                // console.log('Hubo un error al traer la orden')
            }
        } catch {
            throw new Error('Error de la solicitud HTTP');
        }
    };



    // Cambiando el estado de la orden 
    const changeStatus = async (order, status, token) => {
        try {
            const response = await fetch(`https://burger-queen-mock.onrender.com/orders/${order.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    status: status,
                    dateProcessed: new Date(),
                })
            })
            if (response.ok) {
                const orders = await response.json();
                return orders
            }
        } catch {
            throw new Error('Error de la solicitud HTTP');
        }
    }


    // Traer usuarios 
    const fetchShowUsers = async ({ token }) => {
        try {
            const response = await fetch('https://burger-queen-mock.onrender.com/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            })
            if (response.ok) {
                const users = await response.json();
                return {
                    admin: users.filter(item => item.role === 'admin'),
                    waiter: users.filter(item => item.role === 'waiter'),
                    cheff: users.filter(item => item.role === 'cheff'),
                };
            }
        } catch (error) {
            throw new Error('Error de la solicitud HTTP');
        }
    };


    // Crear productos
    const fetchCreateProduct = async ({ token, name, price, img, type }) => {
        return fetch('https://burger-queen-mock.onrender.com/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                "name": name,
                "price": price,
                "image": img,
                "dateEntry": new Date(),
                "type": type
            })
        })
    };


    // Crear usuarios
    const fetchCreateStaff = async ({ token, email, password, role }) => {
        return fetch('https://burger-queen-mock.onrender.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                "email": email,
                "password": password,
                "role": role,
            })
        })
    };


    // Editar productos
    const fetchEditProducts = (token, product) => {
        return fetch(`https://burger-queen-mock.onrender.com/products/${product.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                "name": product.name,
                "price": product.price,
                "image": product.img,
                "type": product.type
            })
        })
    }


    // Editar staff
    const fetchEditStaff = (token, user) => {
        return fetch(`https://burger-queen-mock.onrender.com/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                "email": user.email,
                "role": user.role,
            })
        })
    }


    // Eliminar productos
    const fetchDeleteProduct = async ({ token, productId }) => {
        try {
            // console.log('Realizando solicitud de eliminación del producto');
            const response = await fetch(`https://burger-queen-mock.onrender.com/products/${productId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            // console.log('Respuesta de la solicitud de eliminación del producto:', response);
            return response;
        } catch {
            throw new Error('Error de la solicitud HTTP');
        }
    };


    // Eliminar personal
    const fetchDeleteStaff = async ({ token, user }) => {
        try {
            // console.log('Realizando solicitud de eliminación del producto');
            const response = await fetch(`https://burger-queen-mock.onrender.com/users/${user.id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            // console.log('Respuesta de la solicitud de eliminación del producto:', response);
            return response;
        } catch {
            throw new Error('Error de la solicitud HTTP');
        }
    };



    return {
        fetchProducts,
        login,
        fetchSendOrder,
        fetchGetOrder,
        changeStatus,
        fetchShowUsers,
        fetchCreateProduct,
        fetchCreateStaff,
        fetchEditProducts,
        fetchEditStaff,
        fetchDeleteProduct,
        fetchDeleteStaff
    }
}

export default api