import { getTasks, setTasks } from './storage.js';

function removeTask(index) {
  const tasks = getTasks();
  tasks.splice(index, 1);
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
  setTasks(tasks);
}

export default removeTask;
