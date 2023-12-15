const express = require('express');
const taskRouter = require('./routes/task.routes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});