const express = require('express');
const Task = require('../models/task.model');

const router = new express.Router();

router.get('/tasks', (req, res) => {
  Task.getAll((err, tasks) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json(tasks);
  });
});

router.post('/tasks', (req, res) => {
  const task = req.body;
  Task.create(task, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.status(201).json({ message: 'Task created successfully' });
  });
});

router.get('/tasks/:id', (req, res) => {
  const id = req.params.id;
  Task.getById(id, (err, task) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
  });
});

router.put('/tasks/:id', (req, res) => {
  const id = req.params.id;
  const updates = req.body; 
  Task.getById(id, (err, task) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    Task.update(id, updates, (err) => {
      if (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.json({ message: 'Task updated successfully' });
    });
  });
});

router.delete('/tasks/:id', (req, res) => {
  const id = req.params.id;
  Task.getById(id, (err, task) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    Task.delete(id, (err) => {
      if (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.json({ message: 'Task deleted successfully' });
    });
  });
});

module.exports = router;
