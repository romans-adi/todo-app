import { getTasks } from './storage.js';
import render from './render.js';
import addTask from './add.js';
import removeTask from './remove.js';

class TodoList {
  constructor(listContainer) {
    this.tasks = [];
    this.listContainer = listContainer;
    this.tasks = getTasks();
    this.render = render();
  }

  add(description) {
    addTask(this, description);
  }

  remove(index) {
    removeTask(this, index);
  }

  displayList() {
    render(this);
    document.getElementById('add-task').focus();
  }
}

export default TodoList;
