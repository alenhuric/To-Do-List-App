const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/api'); // Make sure the path is correct
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
