

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
            // console.log(response)

            if (response.ok) {
                return await response.json();
            } else {
                throw new Error('Oops! That username and password combination is incorrect. Please try again.');
            }

        } catch (err) {
            // throw new Error(err.message);
        }
    };



    //trae productos de la Mock
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
                throw Error('adasd');
            }
        } catch (error) {
            throw error
        }
    };
    return {
        fetchProducts,
        login
    }
}

export default api