# Employee Management System

This project is a ReactJS-based Employee Management System. It includes functionalities for both employees and administrators to manage tasks and view task statistics.

## Project Structure

- `src/components/Auth`: Contains authentication-related components.
- `src/components/Dashboard`: Contains dashboard components for both employees and administrators.
- `src/components/others`: Contains various utility components.
- `src/context`: Contains context providers for managing global state.
- `src/utils`: Contains utility functions for local storage and authentication.

## Endpoints

### Authentication

#### Login

- **Endpoint**: `/login`
- **Method**: `POST`
- **Description**: Authenticates a user and stores the username in local storage.
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "name": "User Name",
    "role": "employee"
  }
  ```

### Dashboard

#### Employee Dashboard

- **Endpoint**: `/employee-dashboard`
- **Method**: `GET`
- **Description**: Displays the employee dashboard with task statistics and task list.
- **Response**:
  ```json
  {
    "name": "Employee Name",
    "tasks": [
      {
        "taskTitle": "Task Title",
        "taskDescription": "Task Description",
        "taskDate": "2024-12-01",
        "category": "Category",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    }
  }
  ```

#### Admin Dashboard

- **Endpoint**: `/admin-dashboard`
- **Method**: `GET`
- **Description**: Displays the admin dashboard with options to create tasks and view all tasks.
- **Response**:
  ```json
  {
    "name": "Admin Name",
    "tasks": [
      {
        "taskTitle": "Task Title",
        "taskDescription": "Task Description",
        "taskDate": "2024-12-01",
        "category": "Category",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    }
  }
  ```

### Tasks

#### Create Task

- **Endpoint**: `/create-task`
- **Method**: `POST`
- **Description**: Allows the admin to create a new task and assign it to an employee.
- **Request Body**:
  ```json
  {
    "taskTitle": "Task Title",
    "taskDescription": "Task Description",
    "taskDate": "2024-12-01",
    "category": "Category",
    "assignTo": "Employee Name"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Task created successfully"
  }
  ```

#### View All Tasks

- **Endpoint**: `/all-tasks`
- **Method**: `GET`
- **Description**: Allows the admin to view all tasks assigned to employees.
- **Response**:
  ```json
  {
    "tasks": [
      {
        "taskTitle": "Task Title",
        "taskDescription": "Task Description",
        "taskDate": "2024-12-01",
        "category": "Category",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  }
  ```

## Local Storage

The project uses local storage to persist user data and tasks. The following keys are used:

- `employees`: Stores the list of employees and their tasks.
- `admin`: Stores the admin user data.
- `loggedInUser`: Stores the currently logged-in user's name.

## Setup

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.

## License

This project is licensed under the MIT License.
