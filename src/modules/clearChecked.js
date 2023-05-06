import { getTasks, setTasks } from './storage.js';

function clearCompletedTasks(tasks) {
  tasks = getTasks();
  tasks = tasks.filter((task) => !task.completed);
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
  setTasks(tasks);
}

export default clearCompletedTasks;
