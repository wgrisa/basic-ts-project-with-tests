import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  clearMocks: true,
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  modulePathIgnorePatterns: ['<rootDir>/build'],
  moduleFileExtensions: ['ts', 'js'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
}

export default config
