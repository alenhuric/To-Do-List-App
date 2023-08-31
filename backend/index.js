// const express = require('express');
// const cors = require('cors');
// const taskRoutes = require('./routes/api'); // Make sure the path is correct
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/tasks', taskRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// api.js

// api.js

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController'); // Update the path if needed

router.get('/tasks', taskController.getAllTasks);
// ... other routes

module.exports = router;
