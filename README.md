# nextjs-typescript-demo

This app demonstrates a few basic functionalities and features in Next.js.

## folder structure

```
src/
├── app
├── components
│   ├── atoms
│   ├── molecules
│   ├── organisms
│   └── templates
├── utils
├── hooks
└── styles
```

- `app` folder contains the routing logic of Next.js (App Router)
- `Components` follow the atomic design principle. Each component is isolated in its own subfolder.
- `utils` contains all useful snippets intended for reuse across the project
- `hooks` contains all hooks meant for client-side usage
- `styles` contains all global styles intended for reuse across the project

TypeScript type definitions can be defined and applied throughout the entire project

# Setup

## Environment Setup

Copy over example files:

```sh
cp .env.example .env
```

## Install dependencies

```sh
yarn
```

## Most Important Commands

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run unit tests

```bash
yarn test
```

Run test coverage

```bash
test:coverage
```

For further information look into [package.json](https://github.com/NoackNa/nextjs-typescript-demo/blob/main/package.json)
