```markdown
# TodoApp Monorepo

This is a fullstack **Todo management application** built with:

- **Frontend:** Angular 20 (standalone components, using RxJS, HTTP client)
- **Backend:** Spring Boot (Java 21, RESTful API, Hibernate, CORS support)

---

## Project Structure

```

/
├── backend/     # Spring Boot Java backend
└── frontend/    # Angular 20 frontend

````

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- Angular CLI (`npm install -g @angular/cli`)
- Java 21 (JDK)
- Maven (v3.9+)

---

## Frontend (Angular)

### Location

```bash
cd frontend
````

### Install Dependencies

```bash
npm install
```

### Run Angular Dev Server

```bash
ng serve
```

App will run at: [http://localhost:4200](http://localhost:4200)

---

## ⚙️ Backend (Spring Boot)

### Location

```bash
cd backend
```

### Run with Maven

```bash
./mvnw spring-boot:run
```

App will run at: [http://localhost:8080](http://localhost:8080)

### API Endpoints

* `GET /api/todos` – List all todos
* `POST /api/todos` – Add a new todo
* `PUT /api/todos/{id}` – Update a todo
* `DELETE /api/todos/{id}` – Delete a todo

---

## Cross-Origin (CORS)

CORS is configured in the backend via:

```java
@CrossOrigin(origins = "http://localhost:4200")
```

No Angular proxy is needed during development.

---

## Build for Production

### Frontend

```bash
ng build
```

Compiled files go to `frontend/dist/`.

### Backend

```bash
./mvnw clean package
```

Generates a JAR in `backend/target/`.

---

## License

MIT – Free to use and modify.

```

---

Let me know if you'd like a version that includes **Docker**, **PostgreSQL**, or **deployment instructions (e.g. Vercel + Heroku or AWS)**.
```
