# Secure Hospital Management System with FHIR-style API and DevOps Deployment

Educational, portfolio-grade hospital management platform core built with a secure-by-design backend architecture. This repository demonstrates healthcare domain modeling, API design, PostgreSQL persistence, Redis-ready infrastructure, documentation, testing, and DevOps practices.

This is not a production HBYS/HIS system and must not be used with real patient data.

## Architecture Summary

- Modular monolith backend using NestJS and TypeScript.
- PostgreSQL is the primary relational database.
- Redis is reserved for caching, session support, and rate limiting.
- Future modules will use DTO validation, RBAC guards, audit logging, Prisma data access, and FHIR-style response mappers.
- External healthcare integrations are represented only by mock adapters and documentation.

## Tech Stack

- Node.js, TypeScript, NestJS
- PostgreSQL, Redis
- Prisma ORM planned for Step 2
- Swagger/OpenAPI planned for Step 3
- Jest and Supertest for tests
- Docker and Docker Compose

## Initial Features

- Repository structure for backend, future frontend, infrastructure, docs, and CI.
- Minimal backend health endpoints:
  - `GET /health`
  - `GET /ready`
- Docker Compose services for backend, PostgreSQL, and Redis.
- Documentation skeleton for scope, architecture, database, API, security, FHIR mapping, DevOps, testing, and roadmap.

## Security Highlights

- No real patient data.
- No real national healthcare integrations.
- Secrets are configured through environment variables.
- Future steps will add JWT authentication, refresh token rotation, role-based authorization, strict DTO validation, audit logs, and sensitive data response mapping.

## FHIR-style API

The planned FHIR endpoints are inspired by FHIR resource shapes for portfolio and learning purposes. This project is not a certified FHIR server and does not claim production interoperability compliance.

## Local Setup

Prerequisites:

- Node.js 20+
- npm 10+
- Docker and Docker Compose

Install backend dependencies:

```bash
make install
```

Run the backend locally:

```bash
make dev
```

The backend listens on `http://localhost:3000` by default.

## Docker Setup

Start PostgreSQL, Redis, and backend:

```bash
make docker-up
```

Stop services:

```bash
make docker-down
```

View logs:

```bash
make docker-logs
```

## Environment Variables

Copy the backend example environment file:

```bash
cp backend/.env.example backend/.env
```

Important variables:

- `PORT`
- `NODE_ENV`
- `DATABASE_URL`
- `REDIS_URL`
- `CORS_ORIGIN`
- `JWT_ACCESS_SECRET`
- `JWT_REFRESH_SECRET`

## API Docs URL

Swagger/OpenAPI will be added in Step 3 at:

```text
http://localhost:3000/docs
```

## Test Commands

```bash
make test
make test-e2e
```

## Demo Credentials

Seeded demo credentials will be added after the auth and Prisma setup steps.

## Roadmap

- Step 2: Prisma schema, migrations, seed script, Prisma module.
- Step 3: validation, Swagger, Helmet, CORS, request IDs.
- Step 4: auth, users, JWT, refresh token rotation, RBAC.
- Later steps: audit logs, patients, practitioners, appointments, encounters, clinical records, labs, medications, FHIR-style APIs, tests, and CI.

## Disclaimer

This is an educational portfolio project. Do not use real patient data. Do not connect it to MHRS, MEDULA, e-Nabiz, Saglik.Net, MERNIS, SGK, PACS, DICOM servers, LIS devices, or any real healthcare system.
