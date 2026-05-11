# Testing Strategy

## Unit Tests

Services, guards, mappers, and utility functions should have focused unit tests.

## Integration Tests

Integration tests should cover module behavior with the database and security boundaries.

## Auth Tests

Planned coverage includes login success and failure, password hashing, refresh token rotation, and logout revocation.

## RBAC Tests

Role guard tests should verify allowed and denied access for key clinical workflows.

## Audit Tests

Patient-sensitive reads and writes should assert that audit logs are created.

## API Tests

Supertest e2e tests should cover key REST and FHIR-style endpoints.
