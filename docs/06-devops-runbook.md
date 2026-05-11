# DevOps Runbook

## Run Locally

```bash
make install
make dev
```

## Docker Compose Commands

```bash
make docker-up
make docker-down
make docker-logs
```

## Database Migration Commands

Prisma migrations are added in Step 2.

```bash
make db-migrate
```

## Seed Command

Seed data is added in Step 2 and expanded in Step 4.

```bash
make db-seed
```

## Test Command

```bash
make test
make test-e2e
```

## Troubleshooting

- If port `3000` is in use, set `PORT` in `backend/.env`.
- If PostgreSQL port `5432` is in use, adjust `infra/docker-compose.yml`.
- If Docker health checks fail, inspect logs with `make docker-logs`.
