import React from 'react';
import Api from './api.jsx';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';



describe('Api', () => {
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
            const mensageError = new Error('Oops! That username and password combination is incorrect. Please try again.');
            const email = 'waiter@bbq.com';
            const password = 'waiter123456';
            // Simular respuesta de error
            global.fetch = jest.fn(() =>
                Promise.reject({
                    mensageError
                })

                // global.fetch = jest.fn(() =>
                //     Promise.reject(new Error('Oops! That username and password combination is incorrect. Please try again.'))
            );
            // console.log(Api().login(email, password));
            await expect(Api().login(email, password)).rejects.toThrowError(mensageError);
        });

    });


    describe('fetchProducts', () => {
        test('should fetch products with a valid token//debe buscar productos con un token válido', async () => {
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

        test('should throw an error with an invalid token', async () => {
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


   // servidor de prueba para simular la respuesta de la API
    const server = setupServer(
        rest.post('http://localhost:8080/orders', (req, res, ctx) => {
            return res(ctx.json({ success: true }));
        })
    );

    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    describe('fetchSendOrder', () => {
        test('envía la orden correctamente y muestra un mensaje de éxito', async () => {
            const order = {
                "client": 'Claudia',
                "userId": 1,
                "products": [],
                "status": "pending",
                "dataEntry": new Date(),
            };
            const token = '123456';

            render(<Api />);
            
            const sendButton = screen.getByText('Send to kitchen');
            fireEvent.click(sendButton);

            await waitFor(() => screen.getByText('La orden se envió correctamente'));
            // Ajusta este selector según el mensaje de éxito esperado

            expect(fetch).toHaveBeenCalledWith('http://localhost:8080/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(order)
            });
        });
    });


});