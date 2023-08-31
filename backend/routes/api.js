// backend/routes/api.js

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
// const userController = require('../controllers/userController');
// const authenticateToken = require('../middleware');

// User routes
// router.post('/register', userController.register);
// router.post('/login', userController.login);

// Protected task routes
router.get('/tasks', authenticateToken, taskController.getAllTasks);
router.post('/tasks', authenticateToken, taskController.createTask);
router.put('/tasks/:id', authenticateToken, taskController.updateTask);
router.delete('/tasks/:id', authenticateToken, taskController.deleteTask);

module.exports = router;
