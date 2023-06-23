import Api from './api.jsx';

describe('API', () => {
    describe('Función API', () => {
        test('should log in with correct credentials', async () => {
            const email = 'waiter@bbq.com';
            const password = '123456';

            // Simular respuesta exitosa
            global.fetch = jest.fn(() =>
                Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve({ token: 'token123' }),
                })
            );

            const response = await Api().login(email, password);

            expect(global.fetch).toHaveBeenCalledWith('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            expect(response).toEqual({ token: 'token123' });
        });

        test('should throw an error with incorrect credentials', async () => {
            const email = 'waiter@bbq.com';
            const password = 'waiter123456';

            // Simular respuesta de error
            global.fetch = jest.fn(() =>
                Promise.resolve({
                    ok: false,
                })
            );

            await expect(Api().login(email, password)).rejects.toThrowError('Oops! That username and password combination is incorrect. Please try again.'
            );
        });
    });



    describe('fetchProducts', () => {
        it('should fetch products with a valid token//debe buscar productos con un token válido', async () => {
            const token = 'validtoken123';
            // Simular respuesta exitosa
            global.fetch = jest.fn(() =>
                Promise.resolve({
                    ok: true,
                    json: () =>
                        Promise.resolve([
                            { id: 1, name: 'Product 1', type: 'Desayuno' },
                            { id: 2, name: 'Product 2', type: 'Almuerzo' },
                        ]),
                })
            );

            const response = await Api().fetchProducts({ token });

            expect(global.fetch).toHaveBeenCalledWith('http://localhost:8080/products', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`,
                },
            });
            expect(response).toEqual({
                breakfasts: [{ id: 1, name: 'Product 1', type: 'Desayuno' }],
                lunches: [{ id: 2, name: 'Product 2', type: 'Almuerzo' }],
            });
        });

        it('should throw an error with an invalid token', async () => {
            const token = 'invalidtoken123';

            // Simular respuesta de error
            global.fetch = jest.fn(() =>
                Promise.resolve({
                    ok: false,
                })
            );

            await expect(Api().fetchProducts({ token })).rejects.toThrowError('ERROR: token invalido');
        });
    });
});