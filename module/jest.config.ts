import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  testMatch: ['<rootDir>/**/*.spec.(ts|tsx)'],
  testEnvironment: 'jsdom',
  preset: 'ts-jest/presets/js-with-ts-esm',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.eslint.json' }],
    '.+\\.(svg|style|png|jpg|ttf|woff|woff2)$': '<rootDir>/_test/jest/mocks/file-transformer.js',
  },
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '<rootDir>/_test/jest/test-results',
        outputName: 'jest.xml',
      },
    ],
  ],
};
export default jestConfig;
