# Node.js Backend Project with TypeORM

This project is a Node.js backend application that utilizes TypeORM for database interactions and Express for handling HTTP requests. It is structured to provide a clean separation of concerns, with distinct layers for entities, repositories, services, controllers, and routes.

## Project Structure

```
back-end
├── src
│   ├── entities          # Contains entity definitions
│   ├── migrations        # Contains migration scripts
│   ├── repositories      # Contains repository classes for data access
│   ├── services          # Contains business logic
│   ├── controllers       # Contains request handling logic
│   ├── routes            # Contains route definitions
│   └── index.ts         # Entry point of the application
├── ormconfig.json        # TypeORM configuration
├── package.json          # NPM configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)
- A relational database (e.g., PostgreSQL, MySQL)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd back-end
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Configure the database connection in `ormconfig.json`:
   ```json
   {
     "type": "postgres",
     "host": "localhost",
     "port": 5432,
     "username": "your_username",
     "password": "your_password",
     "database": "your_database",
     "synchronize": true,
     "logging": false,
     "entities": ["src/entities/*.ts"],
     "migrations": ["src/migrations/*.ts"],
     "subscribers": []
   }
   ```

### Running the Application

To start the application, run:
```
npm start
```

The server will start and listen for incoming requests.

### API Endpoints

- `POST /users` - Create a new user
- `GET /users/:id` - Retrieve a user by ID

### License

This project is licensed under the MIT License.