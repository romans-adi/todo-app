import { getTasks, setTasks } from './storage.js';
import render from './render.js';

function removeTask(index) {
  const tasks = getTasks();
  tasks.splice(index, 1);
  this.tasks = this.tasks.map((task, i) => {
    task.index = i + 1;
    return task;
  });
  setTasks(tasks);
  render(tasks);
}

export default removeTask;
