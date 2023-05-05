import { getTasks, setTasks } from './storage.js';

function addTask(description) {
  const tasks = getTasks();
  const task = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(task);
  setTasks(tasks);
}

export default addTask;
