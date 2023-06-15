import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import LoginForm from './loginForm';

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
<<<<<<< HEAD:src/Components/login/loginComponents/loginForm.test.jsx
});

describe('Login', () => {
    test('renders content', () => {
      const user = {
        email:'example@example.com',
        password:'*********',
      };
  
      const component = render(<LoginForm users={user}/>);
      // console.log(component);
  
      expect(component.container).toBeInTheDocument()
    });
  });

=======
});

describe('Login', () => {
    test('renders content', () => {
        const user = {
            email: 'example@example.com',
            password: '*********',
        };

        const component = render(<LoginForm users={user} />);
        // console.log(component);

        expect(component.container).toBeInTheDocument()
    });
});

>>>>>>> e29bbc718d10c41f47d9fa6f379e5c8e8721baac:src/Components/loginForm/loginForm.test.jsx

