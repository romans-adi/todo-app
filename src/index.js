import './styles.css';

class TodoList {
  constructor(listContainer) {
    this.tasks = [
      {
        description: 'wash the dishes',
        completed: false,
        index: 1,
      },
      {
        description: 'complete To Do List project',
        completed: false,
        index: 2,
      },
    ];
    this.listContainer = listContainer;
    this.tasks = this.saveTasksToStorage();
    this.tasks = this.getTasksFromStorage();
    this.render();
    this.displayToDoList();
  }

  // Add method

  add(description) {
    const task = {
      description,
      completed: false,
      index: this.tasks.length + 1,
    };
    this.tasks.push(task);
    this.saveTasksToStorage();
    this.render();
  }

  // Remove method

  remove(index) {
    this.tasks.splice(index, 1);
    this.saveTasksToStorage();
    this.render();
  }

  // Display list method

  displayToDoList() {
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
      this.render();
    });

    // Add task input field

    const inputField = document.createElement('input');
    inputField.classList.add('add-task');
    inputField.type = 'text';
    inputField.placeholder = 'Add to your list';
    inputField.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && inputField.value.trim() !== '') {
        if (inputField.value !== '') {
          this.add(inputField.value.trim());
          inputField.value = '';
        }
      }
    });

    // Return icon (add task button)

    const addBtn = document.createElement('input');
    addBtn.classList.add('icon-return');
    addBtn.type = 'submit';
    addBtn.setAttribute('value', '');
    addBtn.setAttribute('id', 'submit-new-item');
    addBtn.setAttribute('title', 'click this or press enter to submit');
    const addListInput = document.createElement('li');
    addListInput.appendChild(inputField);
    addListInput.appendChild(addBtn);
    listContainer.appendChild(addListInput);
    addBtn.addEventListener('click', () => {
      if (inputField.value !== '') {
        this.add((inputField.value.trim()));
        this.saveTasksToStorage();
        this.render();
      }
    });

    // Creating li element

    this.tasks.forEach((task, index) => {
      const listItem = document.createElement('li');
      listItem.setAttribute('id', index);

      // Checkbox

      const checkbox = document.createElement('input');
      checkbox.classList.add('checkbox');
      checkbox.type = 'checkbox';
      checkbox.checked = task.completed;
      checkbox.addEventListener('change', (event) => {
        task.completed = event.target.checked;
        this.saveTasksToStorage();
        this.render();
      });
      listItem.appendChild(checkbox);

      // Task text

      const description = document.createElement('span');
      description.textContent = task.description;
      listItem.appendChild(description);

      // Three vertical dots (more button)

      const dots = document.createElement('span');
      dots.classList.add('dots');
      listItem.appendChild(dots);
      listContainer.appendChild(listItem);
    });

    // Clear button

    const clearButton = document.createElement('button');
    clearButton.classList.add('clear-btn');
    clearButton.textContent = 'Clear completed tasks';
    clearButton.addEventListener('click', () => {
      this.tasks = this.tasks.filter((task) => !task.completed);
      this.saveTasksToStorage();
      this.render();
    });
    const lastListItem = document.createElement('li');
    lastListItem.classList.add('clear-btn-container');
    lastListItem.appendChild(clearButton);
    listContainer.appendChild(lastListItem);
  }

  // Setter and getter for local storage

  saveTasksToStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getTasksFromStorage() {
    const tasksString = localStorage.getItem('tasks');
    this.tasksString = tasksString;
    if (tasksString) {
      return JSON.parse(tasksString);
    }
    return [];
  }

  // Render

  render() {
    this.displayToDoList();
  }
}

const todoList = new TodoList();
todoList.render();
