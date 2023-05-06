import { setTasks } from './storage.js';

const checkboxToggle = (task, tasks, render) => {
  const checkbox = document.createElement('input');
  checkbox.classList.add('checkbox');
  checkbox.type = 'checkbox';
  checkbox.checked = task.completed;
  checkbox.addEventListener('change', (event) => {
    task.completed = event.target.checked;
    setTasks(tasks);
    render(tasks);
  });
  return checkbox;
};

export default checkboxToggle;
