const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors()); // To handle cross-origin requests
app.use(express.json()); // To parse JSON request bodies

// Dummy data for to-do list
let todos = [
    { id: 1, task: 'Learn React' },
    { id: 2, task: 'Learn Express' },
];

// Route to get all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Route to add a new todo
app.post('/todos', (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        task: req.body.task,
    };
    todos.push(newTodo);
    res.json(newTodo);
});

// Route to delete a todo by id
app.delete('/todos/:id', (req, res) => {
    todos = todos.filter(todo => todo.id !== parseInt(req.params.id));
    res.status(204).send();
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
 
