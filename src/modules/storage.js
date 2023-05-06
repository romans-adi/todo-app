export function setTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function getTasks() {
  return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
}
