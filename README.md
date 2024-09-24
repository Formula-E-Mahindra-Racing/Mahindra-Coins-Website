React + TypeScript + Vite
This template provides a minimal setup to get React working in Vite with HMR (Hot Module Replacement) and some ESLint rules.

Currently, two official plugins are available for integration:

@vitejs/plugin-react uses Babel for Fast Refresh.
@vitejs/plugin-react-swc uses SWC for Fast Refresh, offering faster build times.
Installation and Setup
To start using this template:

Install dependencies:
npm install
Run the development server:
npm run dev
Build for production:
npm run build
Preview the build:
npm run preview
Expanding the ESLint Configuration
If you are developing a production-grade application, we recommend enhancing the ESLint configuration for more robust type-checking and stylistic improvements.

Type-Aware Lint Rules
For stronger type-checking, configure the top-level parserOptions property:

export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
Strict Type-Checking Modes
Replace tseslint.configs.recommended with either tseslint.configs.recommendedTypeChecked or tseslint.configs.strictTypeChecked to enable more comprehensive type-checking rules. The strictTypeChecked option enforces even more rigorous checks and is ideal for critical production applications.
Optionally, add ...tseslint.configs.stylisticTypeChecked for enforcing stylistic rules like consistent naming conventions and code formatting.
ESLint React Plugin
For better React code linting, install and configure eslint-plugin-react:

npm install eslint-plugin-react --save-dev
Then, update your eslint.config.js:

import react from 'eslint-plugin-react'

export default tseslint.config({
  settings: {
    react: { version: '18.3' }, // Specify React version for better linting compatibility
  },
  plugins: {
    react, // Add React plugin
  },
  rules: {
    ...react.configs.recommended.rules, // Enable recommended React rules
    ...react.configs['jsx-runtime'].rules, // Enforce JSX runtime rules
  },
})
Testing Configuration (Optional)
For applications that require testing, consider integrating Vitest for a seamless testing experience with Vite:

Install Vitest:
npm install vitest --save-dev
Add test script to package.json:
{
  "scripts": {
    "test": "vitest"
  }
}
Run tests:
npm run test
