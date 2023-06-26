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
            } else {
                throw new Error('Oops! That username and password combination is incorrect. Please try again.');
            }
        } catch (err) {
            // throw new Error(err.message);
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
    const fetchSendOrder = async ( selectedProducts, token ) => {
        try {
        const response = await fetch('http://localhost:8080/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(selectedProducts)
         })
          if (response.ok) {
            console.log('La orden se envió correctamente')
           return true
          } else {
            console.log('Hubo un error al enviar la orden')
          }
        } catch(error) {
            // console.log(error,'Error de la solicitud HTTP')
        }     
    };
        

    return {
        fetchProducts,
        login,
        fetchSendOrder,
    }
}

export default api