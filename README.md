# Task Manager API

## Description
The Task Manager API is a RESTful web service designed to manage tasks. It provides endpoints for creating, retrieving, updating, and deleting tasks. This API is built with Node.js and Express, and uses a SQLite database for storage. It's designed with simplicity and scalability in mind, making it easy to integrate with any front-end application that needs task management functionality.

## Features
- **Task Management**: Create, retrieve, update, and delete tasks. Each task has a description and a status indicating whether it's completed.
- **Error Handling**: Receive descriptive and helpful error messages when something goes wrong.

## Technologies Used
- Node.js
- Express
- SQLite

## Installation
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.

## Usage
1. Start the server by running `node index.js`.
2. Use the endpoints defined in [`routes/task.routes.js`](routes/task.routes.js) to manage tasks.