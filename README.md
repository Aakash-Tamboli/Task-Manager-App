# Task Manager App (MERN Stack)

This is a Task Manager app built using the MERN stack (MongoDB, Express, React, Node.js). The app allows users to create, update, retrieve, and delete tasks. The backend exposes RESTful APIs to manage tasks, while the frontend uses React and React Icons for a smooth user interface experience.

## Technologies Used

- **MongoDB**: For the database to store tasks.
- **Express**: For building the RESTful API.
- **React**: For building the frontend user interface.
- **React Icons**: For providing various icons in the UI.
- **Node.js**: For the backend server.

---

## API Endpoints

### 1. **Get All Tasks**

- **URL**: `/api/tasks`
- **Method**: `GET`
- **Description**: Fetches a list of all tasks stored in the database.
- **Sample Response**:
  ```json
  [
    {
      "_id": "60a6f85b5dbf8f0b0b5ed1a6",
      "task": "Complete MERN app",
      "completed": false
    },
    {
      "_id": "60a6f85b5dbf8f0b0b5ed1a7",
      "task": "Read MongoDB documentation",
      "completed": true
    }
  ]
  ```

### 2. **Add Task**

- **URL**: `/api/tasks`
- **Method**: `POST`
- **Description**: Adds a new task to the database.
- **Request Body**:
  ```json
  {
    "task": "Learn Node.js"
  }
  ```
- **Sample Response**:
  ```json
  {
    "_id": "60a6f85b5dbf8f0b0b5ed1a8",
    "task": "Learn Node.js",
    "completed": false
  }
  ```

### 3. **Update Task**

- **URL**: `/api/tasks/:id`
- **Method**: `PUT`
- **Description**: Toggles the completion status of a task based on the provided ID.
- **URL Parameters**:
  - `id`: The ID of the task to update.
- **Sample Response**:
  ```json
  {
    "_id": "60a6f85b5dbf8f0b0b5ed1a6",
    "task": "Complete MERN app",
    "completed": true
  }
  ```

### 4. **Delete Task**

- **URL**: `/api/tasks/:id`
- **Method**: `DELETE`
- **Description**: Deletes a task by its ID.
- **URL Parameters**:
  - `id`: The ID of the task to delete.
- **Sample Response**:
  ```json
  {
    "message": "Task Deleted"
  }
  ```

---

## Task Schema

The `Task` schema defines the structure of the task data in the MongoDB database. Here is how the schema is structured:

```javascript
const TaskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true, // The task description is required.
  },
  completed: {
    type: Boolean,
    default: false, // The default value for a task is not completed.
  },
});
```

### Field Descriptions:

- **task** (String): The description or name of the task (required).
- **completed** (Boolean): Indicates whether the task is completed or not. Defaults to `false`.

The schema ensures that each task has a task description and a completion status. The completion status can be toggled (true or false) using the `updateTask` API.

---

## How to Run the Project

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/task-manager-app.git
   ```

2. **Install dependencies for the server**:

   ```bash
   cd server-app
   npm install
   ```

3. **Install dependencies for the client**:

   ```bash
   cd client-app
   npm install
   ```

4. **Start the server**:

   ```bash
   npm run start
   ```

5. **Start the client**:

   ```bash
   npm run start
   ```

6. The app will be running on `http://localhost:3000` for the frontend, and the backend will be accessible on `http://localhost:5000`.
