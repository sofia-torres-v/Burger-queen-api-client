import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import LoginForm from '../src/Components/login/loginComponents/loginForm';

describe('LoginForm ', () => {
    it('placeholder fields should exist/Debería existir los campos de placeholder', () => {
        const { getByPlaceholderText } = render(<MemoryRouter>
            <LoginForm />
        </MemoryRouter>);

        const emailInput = getByPlaceholderText('example@example.com');
        const passwordInput = getByPlaceholderText('*********');

        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();

    });
});