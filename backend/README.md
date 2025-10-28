# Todo Backend (Spring Boot - Maven)

## Overview
This is a Spring Boot backend for the Todo React frontend. It exposes CRUD REST endpoints under `/api/todos`.

## Run locally (H2 in-memory)
- Build: `mvn clean package`
- Run: `mvn spring-boot:run`
- App: `http://localhost:8080`
- API: `http://localhost:8080/api/todos`

## Run with Docker Compose (MySQL)
- `docker-compose up --build`
- Backend: `http://localhost:8080`
- MySQL: `localhost:3306` (user/password as defined in docker-compose.yml)

## Notes
- The project uses Lombok. In your IDE enable Lombok plugin or remove Lombok annotations and add getters/setters.
- `application.yml` contains two profiles: default (H2) and `mysql` (for docker-compose/RDS).
- For AWS RDS use the `mysql` profile and set `MYSQL_HOST`, `MYSQL_PORT`, `MYSQL_DATABASE`, `MYSQL_USER`, `MYSQL_PASSWORD` using environment variables or secrets.
