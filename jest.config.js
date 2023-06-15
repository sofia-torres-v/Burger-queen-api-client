export default {
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|svg)$': 'jest-transform-stub',
    },
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    testEnvironmentOptions: {
        // Opcional: Si necesitas compatibilidad con la API fetch, descomenta la siguiente línea
        pretendToBeVisual: true
      },
};

