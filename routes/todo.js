const express = require('express');
const route = express.Router();
const { createTodo } = require('../controllers/createTodo');
// Route to create a new todo
route.post('/todos', createTodo);
route.get('/', (req, res) => {
    res.send('Welcome to the Todo API');
});
route.get('/health', (req, res) => {
    res.status(200).send('OK');
});
route.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

module.exports = route; 