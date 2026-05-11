# Architecture

## Modular Monolith

The backend is a NestJS modular monolith. Each module owns its HTTP controller, DTOs, service logic, and persistence interactions. Shared security, request metadata, filters, interceptors, and guards live under `src/common`.

## Main Modules

- Auth and users
- Patients
- Practitioners
- Appointments
- Encounters
- Clinical notes
- Diagnoses
- Lab orders and lab results
- Medication requests
- Audit logs
- FHIR-style read API
- Health and readiness

## Request Flow

```mermaid
sequenceDiagram
  participant Client
  participant Controller
  participant Guard
  participant Service
  participant Prisma
  Client->>Controller: HTTP request
  Controller->>Guard: auth and role checks
  Controller->>Service: validated DTO
  Service->>Prisma: data access
  Prisma-->>Service: records
  Service-->>Controller: response DTO
  Controller-->>Client: JSON response
```

## Authentication Flow

```mermaid
sequenceDiagram
  participant Client
  participant AuthController
  participant AuthService
  participant TokenStore
  Client->>AuthController: login(email, password)
  AuthController->>AuthService: validate credentials
  AuthService->>TokenStore: store hashed refresh token
  AuthService-->>Client: access token and refresh token
```

## Audit Flow

```mermaid
sequenceDiagram
  participant User
  participant PatientApi
  participant DomainService
  participant AuditService
  User->>PatientApi: sensitive read or write
  PatientApi->>DomainService: perform operation
  DomainService->>AuditService: record actor, resource, patient, request metadata
```

## Integration Mock Flow

```mermaid
flowchart LR
  Core[Hospital Core] --> Adapter[Mock Integration Adapter]
  Adapter --> Sandbox[Fake Sandbox Response]
  Adapter --> Docs[Integration Documentation]
```
