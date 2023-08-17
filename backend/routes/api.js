const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// GET all tasks
router.get('/tasks', taskController.getAllTasks);

// POST a new task
router.post('/tasks', taskController.createTask);

// PUT to update task completion status
router.put('/tasks/:id', taskController.updateTask);

// DELETE a task
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;
