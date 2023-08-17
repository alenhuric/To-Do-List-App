let tasks = [];

function getAllTasks(req, res) {
  res.json(tasks);
}

function createTask(req, res) {
  const newTask = req.body;
  newTask.id = Date.now();
  newTask.completed = false;
  tasks.push(newTask);
  res.status(201).json(newTask);
}

function updateTask(req, res) {
  const taskId = parseInt(req.params.id);
  tasks = tasks.map((task) =>
    task.id === taskId ? { ...task, completed: !task.completed } : task
  );
  res.json({ message: 'Task updated successfully' });
}

function deleteTask(req, res) {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter((task) => task.id !== taskId);
  res.json({ message: 'Task deleted successfully' });
}

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};
