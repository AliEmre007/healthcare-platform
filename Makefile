SHELL := /bin/bash

.PHONY: install dev build test test-e2e lint db-migrate db-generate db-seed docker-up docker-down docker-logs health

install:
	cd backend && npm install

dev:
	cd backend && npm run start:dev

build:
	cd backend && npm run build

test:
	cd backend && npm test

test-e2e:
	cd backend && npm run test:e2e

lint:
	cd backend && npm run lint

db-migrate:
	cd backend && npm run db:migrate

db-generate:
	cd backend && npm run db:generate

db-seed:
	cd backend && npm run db:seed

docker-up:
	docker compose -f infra/docker-compose.yml up --build

docker-down:
	docker compose -f infra/docker-compose.yml down

docker-logs:
	docker compose -f infra/docker-compose.yml logs -f

health:
	curl -fsS http://localhost:3000/health
