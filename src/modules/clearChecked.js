import { getTasks, setTasks } from './storage.js';

const clearCompletedTasks = () => {
  const tasks = getTasks().filter((task) => !task.completed);
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
  setTasks(tasks);
};

export default clearCompletedTasks;
