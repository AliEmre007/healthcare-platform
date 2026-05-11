# API Contract

## Endpoint List

Initial Step 1 endpoints:

- `GET /health`
- `GET /ready`

Planned endpoints include auth, users, patients, practitioners, appointments, encounters, clinical notes, diagnoses, lab orders, lab results, medication requests, audit logs, and FHIR-style resources.

## Request Example

```http
GET /health HTTP/1.1
Host: localhost:3000
```

## Response Example

```json
{
  "status": "ok",
  "service": "healthcare-platform-backend",
  "timestamp": "2026-05-11T12:00:00.000Z"
}
```

## Error Format

Planned standard error shape:

```json
{
  "statusCode": 400,
  "message": ["validation error"],
  "error": "Bad Request",
  "requestId": "req_..."
}
```

## Pagination Format

Planned list response shape:

```json
{
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 0,
    "totalPages": 0
  }
}
```
