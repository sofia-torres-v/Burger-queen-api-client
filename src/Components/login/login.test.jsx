import React from 'react';
import { render, fireEvent, waitFor  } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import Login from './login';

describe('Login ', () => {
    it('should display an error message for empty fields/Debe mostrar un mensaje de error para los campos vacíos', async () => {
        const { getByText, getByTestId } = render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        const loginButton = getByText('Login');

        fireEvent.click(loginButton);

        const errorMessage = await waitFor(() => getByTestId('ErrorMessage'));

        expect(errorMessage).toHaveTextContent('* These fields are required');
    });



});



