# Vite Vue 3 TypeScript Boilerplate

A modern and feature-rich boilerplate for Vue 3 projects using TypeScript and Vite.

## Author

[TudaCoding](https://github.com/tudacoding) 🚀

## Features

- ⚡️ [Vue 3](https://vuejs.org/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- 🚦 [Vue Router](https://router.vuejs.org/) for client-side routing
- 📦 [Pinia](https://pinia.vuejs.org/) for state management
- 🔍 [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) for code linting and formatting
  - Includes `eslint-config-prettier` to avoid conflicts
- 🧪 [Vitest](https://vitest.dev/) for unit testing
- 📝 [Commitlint](https://commitlint.js.org/) for commit message linting
- 📁 TypeScript path aliases configuration
- 🔄 Auto-import for Vue composables and APIs
- 🎨 [Vuetify](https://vuetifyjs.com/en/) for UI components and styling

## Prerequisites

- Node.js (version 16 or higher)
- pnpm (version 8 or higher)

## Getting Started

```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## Scripts

```bash
# Development
pnpm dev

# Build
pnpm build

# Preview production build
pnpm preview

# Run tests
pnpm test

# Lint
pnpm lint

# Format code
pnpm format
```

## Project Structure

```
.
├── src/
│   ├── assets/          # Static assets
│   ├── components/      # Vue components
│   ├── router/          # Vue Router configuration
│   ├── stores/          # Pinia stores
│   ├── views/           # Page components
│   ├── App.vue          # Root component
│   └── main.ts          # Application entry point
├── tests/               # Test files
├── .eslintrc           # ESLint configuration
├── .prettierrc         # Prettier configuration
├── commitlint.config.js # Commitlint configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## TypeScript Support

The project includes full TypeScript support with path aliases configuration. Vue components can be written using TypeScript with the `<script setup lang="ts">` syntax.

## Contributing

Please make sure to follow the commit message conventions enforced by commitlint when contributing to this project.

## License

[MIT License](LICENSE)
