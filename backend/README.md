# **Aura research (Backend API)**

A production‑ready backend REST API built with **NestJS**, **TypeORM**,
**PostgreSQL**, **Passport**, and **Jest**.\
This project follows modern best practices using the most recent
versions of NestJS.

------------------------------------------------------------------------

## 🚀 **Tech Stack**

### **NestJS**

Chosen as the main backend framework due to:

-   **Modular architecture** ideal for scalable applications.
-   **First‑class TypeScript support**.
-   **Powerful CLI** for generating modules, controllers, and services.
-   **Dependency Injection** built‑in for clean architecture.
-   **Excellent integration** with Passport, TypeORM, caching,
    validation pipes, and more.

### **TypeORM**

Selected as the ORM because it provides:

-   **ActiveRecord and DataMapper patterns**.
-   **Migrations** for schema versioning.
-   **Native NestJS integration**.
-   **Wide SQL database support**, especially PostgreSQL.

### **PostgreSQL**

The database of choice thanks to:

-   **Strong indexing and query performance**.
-   **Widely supported in cloud providers**.
-   **Perfect pairing** with TypeORM.

### **Passport (Authentication)**

Passport is used for authentication because:

-   **Large ecosystem of strategies** (local, JWT, OAuth2, etc.).
-   **Seamless NestJS integration** with guards and decorators.
-   **Clear separation of concerns**: validation, serialization, session
    logic.

### **Jest**

Built‑in test runner used for:

-   **Unit testing services, controllers, and guards**.
-   **Mocking dependencies** via Nest's Testing Module.
-   **Fast execution and watch mode**.

------------------------------------------------------------------------

## 📁 **Project Structure (Simplified)**

``` bash
/
├── src/
│   ├── auth/
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.module.ts
│   │   ├── strategies/
│   │   └── guards/
│   ├── users/
│   ├── migrations/
│   ├── shared/
│   ├── database/
│   ├── app.module.ts
│   └── main.ts
├── test/
│   └── *.spec.ts
├── ormconfig.ts
├── jest.config.js
└── package.json
```

------------------------------------------------------------------------

## 🛠️ **Prerequisites**

-   **Node.js** 18+
-   **pnpm** (recommended) or npm/yarn

------------------------------------------------------------------------

## ⚙️ **Environment Variables**

Create a `.env` file:

``` env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=password
DB_NAME=aura
SECRET_KEY=TEst
```

------------------------------------------------------------------------

## 📦 **Install Dependencies**

``` bash
pnpm install
```

or

``` bash
npm install
```

------------------------------------------------------------------------

## 🗄️ **Run Database Migrations**

``` bash
pnpm run migration:generate
```

``` bash
pnpm run migration:run
```

------------------------------------------------------------------------

## 🗄️ **Revert Database Migrations**

``` bash
pnpm run migration:revert
```

------------------------------------------------------------------------

## 🏃 **Start Development Server**

``` bash
pnpm start:dev
```

API will run at:

    http://localhost:3001

------------------------------------------------------------------------

## 🏗️ **Build for Production**

``` bash
pnpm build
```

Run the compiled app:

``` bash
pnpm start
```


------------------------------------------------------------------------

## ✔️ **Running Tests (Jest)**

Run all tests:

``` bash
pnpm test
```

Run in watch mode:

``` bash
pnpm test:watch
```

Run tests with coverage:

``` bash
pnpm test:coverage
```

Example `package.json` scripts:

``` json
{
  "scripts": {
    "build": "nest build",
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
    "start": "nest start",
    "start:dev": "nest start --watch",
    "start:debug": "nest start --debug --watch",
    "start:prod": "node dist/src/main",
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage",
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
    "test:e2e": "jest --config ./test/jest-e2e.json",
    "typeorm": "typeorm-ts-node-commonjs -d typeorm.config.ts",
    "migration:generate": "npm run typeorm -- migration:generate src/migrations/initial",
    "migration:run": "npm run typeorm -- migration:run",
    "migration:revert": "npm run typeorm -- migration:revert",
    "heroku-postbuild": "npm run build"
  }
}
```

------------------------------------------------------------------------

## ✨ **Why This Stack?**

This backend architecture is chosen for building reliable, maintainable,
scalable APIs:

-   **NestJS** enables clean modular organization and strong
    conventions.
-   **TypeORM + PostgreSQL** provide a robust relational foundation with
    migrations.
-   **Passport + JWT** ensure secure authentication.
-   **Jest** guarantees correctness through automated testing.

Ideal for production‑level applications, microservices, and enterprise
systems.
