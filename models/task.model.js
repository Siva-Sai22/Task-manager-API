const db = require('../db/db');

class Task {
  static getAll(callback) {
    db.all('SELECT * FROM tasks', callback);
  }

  static create(task, callback) {
    db.run('INSERT INTO tasks (description, completed) VALUES (?, ?)', [task.description, task.completed], callback);
  }

  static getById(id, callback) {
    db.get('SELECT * FROM tasks WHERE id = ?', [id], callback);
  }

  static update(id, updates, callback) {
    db.run('UPDATE tasks SET description = ?, completed = ? WHERE id = ?', [updates.description, updates.completed, id], callback);
  }

  static delete(id, callback) {
    db.run('DELETE FROM tasks WHERE id = ?', [id], callback);
  }
}

module.exports = Task;