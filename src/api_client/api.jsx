import { useState, useEffect } from 'react';

//trae productos de la Mock
const productFetcher = ({ token }) => {
    const [breakfasts, setBreakfasts] = useState([]);
    const [lunches, setLunches] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
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
                    console.log(products);
                    setBreakfasts(products.filter(item => item.type === 'Desayuno'))
                    setLunches(products.filter(item => item.type === 'Almuerzo'))
                } else {
                    console.log('error, este tipo de comida no existe')
                }
            } catch (error) {
                //error
            }
        };
        fetchProducts();
    }, [token])
    return { breakfasts, lunches };
}

export default productFetcher