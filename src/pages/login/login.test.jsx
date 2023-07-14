import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Login from './login';
import { useNavigate } from 'react-router-dom';



jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

describe('Login', () => {
    test('debe mostrar un mensaje de error para los campos vacíos', async () => {
        render(<Login />);

        const loginButton = screen.getByTestId('button-login');
        fireEvent.click(loginButton);

        const errorMessage = screen.getByText('* These fields are required');
        expect(errorMessage).toBeInTheDocument();
    });
});