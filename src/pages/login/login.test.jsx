import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom'
import Login from './login';

jest.mock('react-router-dom', () => {
    return { useNavigate: jest.fn() }
})

describe('Login', () => {

    test('should display an error message for empty fields', async () => {
        const { getByText, getByTestId } = render(<Login />

        );
        // const loginButton = getByText('Login');
        // fireEvent.click(loginButton);

        const errorMessage = getByTestId(errorMessage);
        // expect(errorMessage).toBeInTheDocument('* These fields are required');
        expect(errorMessage).toHaveTextContent('* These fields are required');
    })
})


// // para probar - Sofia consultar
// test('Clicking the button calls event handler once', () => {
//     const mockHandler = jest.fn();
//     const component = render(<Login handleLogin={mockHandler} />);
//     screen.debug()
//     const button = component.getByText('Sign in');
//     fireEvent.click(button);
//     expect(mockHandler).toHaveBeenCalledTimes(1);
// });

// });

