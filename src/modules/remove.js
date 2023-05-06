import { getTasks, setTasks } from './storage.js';

const removeTask = (index) => {
  const tasks = getTasks().filter((_, i) => i !== index);
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
  setTasks(tasks);
};

export default removeTask;
