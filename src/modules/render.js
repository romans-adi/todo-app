import { setTasks, getTasks } from './storage.js';
import addTask from './add.js';
import removeTask from './remove.js';
import clearCompletedTasks from './clearChecked.js';
import checkboxToggle from './checkboxToggle.js';

const render = () => {
  const tasks = getTasks();
  const listContainer = document.getElementById('tasks');
  listContainer.innerHTML = '';
  const headingContainer = document.createElement('li');
  const heading = document.createElement('h1');
  const refreshIcon = document.createElement('div');
  refreshIcon.classList.add('icon-refresh');
  heading.textContent = 'Today\'s To Do';
  heading.classList.add('heading');
  headingContainer.appendChild(heading);
  headingContainer.appendChild(refreshIcon);
  listContainer.appendChild(headingContainer);
  refreshIcon.addEventListener('click', () => {
    refreshIcon.classList.add('rotate');
    setTimeout(() => {
      refreshIcon.classList.remove('rotate');
      render();
    }, 2000);
  });

  // Add task input field

  const inputField = document.createElement('input');
  inputField.classList.add('add-task');
  inputField.id = 'add-task';
  inputField.type = 'text';
  inputField.placeholder = 'Add to your list';

  // Return icon (add task button)

  const addBtn = document.createElement('input');
  addBtn.classList.add('icon-return');
  addBtn.type = 'submit';
  addBtn.value = '';
  addBtn.id = 'submit-new-item';
  addBtn.title = 'click this or press enter to submit';

  // Add input field and button to list container

  const addListInput = document.createElement('li');
  addListInput.appendChild(inputField);
  addListInput.appendChild(addBtn);
  listContainer.appendChild(addListInput);

  // Submit new task

  const submitNewTask = () => {
    if (inputField.value.trim() !== '') {
      addTask(inputField.value.trim());
      render();
      inputField.value = '';
      document.getElementById('add-task').focus();
    }
  };

  inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      submitNewTask();
    }
  });

  addBtn.addEventListener('click', () => {
    submitNewTask();
  });

  // Creating li element

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.setAttribute('id', index + 1);

    // Checkbox

    const checkbox = checkboxToggle(task, tasks, render);
    listItem.appendChild(checkbox);

    // Remove Button

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-task';
    removeBtn.classList.add('hidden');

    // Task text

    const description = document.createElement('textarea');
    description.setAttribute('rows', '1');
    description.value = task.description;
    if (task.completed === true) {
      description.classList.add('completed');
    }
    description.addEventListener('focus', () => {
      removeBtn.classList.remove('hidden');
      removeBtn.addEventListener('mousedown', () => {
        removeTask(index);
        render(tasks);
      });
    });
    description.addEventListener('blur', () => {
      removeBtn.classList.add('hidden');
    });
    description.addEventListener('input', (event) => {
      task.description = event.target.value;
      description.style.height = 'auto';
      description.style.height = `${description.scrollHeight}px`;
    });
    description.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        task.description = description.value;
        setTasks(tasks);
        render(tasks);
      }
    });
    listItem.appendChild(description);
    listItem.appendChild(removeBtn);

    // Three vertical dots (more button)

    const dots = document.createElement('span');
    dots.classList.add('dots');
    listItem.appendChild(dots);
    listContainer.appendChild(listItem);
  });

  // Clear button

  const clearBtn = document.createElement('button');
  clearBtn.classList.add('clear-btn');
  clearBtn.setAttribute('id', 'clear-all');
  clearBtn.textContent = 'Clear completed tasks';
  const lastListItem = document.createElement('li');
  lastListItem.classList.remove('ripple');
  clearBtn.addEventListener('click', () => {
    lastListItem.classList.add('ripple');
    clearBtn.innerHTML = 'Done &#10003;';
    setTimeout(() => {
      clearCompletedTasks(tasks);
      render(tasks);
    }, 360);
  });
  lastListItem.classList.add('clear-btn-container');
  lastListItem.appendChild(clearBtn);
  listContainer.appendChild(lastListItem);
};

export default render;
