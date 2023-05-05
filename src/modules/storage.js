export function setTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function getTasks() {
  const tasksString = localStorage.getItem('tasks');
  if (tasksString) {
    return JSON.parse(tasksString);
  }
  return [];
}
