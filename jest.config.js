// eslint-disable-next-line unicorn/prefer-module
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
};

// eslint-disable-next-line unicorn/prefer-module
module.exports = createJestConfig(customJestConfig);
