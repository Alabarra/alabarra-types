module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard-with-typescript',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  plugins: ['@typescript-eslint', 'import', 'react', 'prettier'],
  rules: {
  }
}
