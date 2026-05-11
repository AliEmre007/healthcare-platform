# Security Model

## Authentication Model

Planned authentication uses email and password login, hashed passwords, JWT access tokens, and refresh token rotation. Refresh tokens are stored only as hashes.

## Authorization Model

Role-based access control will use decorators and guards. Controllers declare required roles, guards enforce them, and services avoid returning unauthorized sensitive data.

## RBAC Matrix

| Role | Initial Access |
| --- | --- |
| ADMIN | User, patient, practitioner, and audit administration |
| DOCTOR | Clinical read/write workflows |
| NURSE | Patient and encounter reads, limited notes, check-in |
| RECEPTIONIST | Demographics and appointments |
| LAB_TECHNICIAN | Lab orders and results |
| PHARMACIST | Medication request reads |
| AUDITOR | Read-only audit activity |

## Token Lifecycle

Access tokens are short lived. Refresh tokens are rotated on refresh and revoked on logout.

## Audit Logging

Patient-sensitive reads and writes create audit records with actor, action, resource, patient, request metadata, and success status.

## Sensitive Data Handling

- Never return password hashes.
- Never store plaintext passwords or refresh tokens.
- Do not store raw national ID values.
- Patient list responses must avoid highly sensitive details.
- Application logs must not include clinical content.

## Rate Limiting

Auth endpoints should be rate-limited using Redis-backed storage in a later step.

## Threat Model Summary

Primary risks include credential attacks, privilege escalation, accidental sensitive data exposure, weak auditability, dependency vulnerabilities, and insecure environment configuration.
