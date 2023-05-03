import "./styles.css";

class TodoList {
  constructor(listContainer) {
    this.tasks = [
      {
        description: "wash the dishes",
        completed: false,
        index: 0,
      },
      {
        description: "complete ToDo List project",
        completed: false,
        index: 1,
      },
    ];
    this.listContainer = listContainer;
    this.tasks = this.getTasksFromStorage();
    this.render();
    this.displayToDoList();
  }

  add(description) {
    const task = {
      description,
      completed: false,
    };
    this.tasks.push(task);
    this.saveTasksToStorage();
    this.render();
  }

  remove(index) {
    this.tasks.splice(index, 1);
    this.saveTasksToStorage();
    this.render();
  }

  displayToDoList() {
    const listContainer = document.getElementById("tasks");
    listContainer.innerHTML = "";
    const heading = document.createElement("li");
    heading.textContent = "Demo";
    heading.classList.add("heading");
    listContainer.appendChild(heading);
    const inputField = document.createElement("input");
    inputField.classList.add("add-task");
    inputField.type = "text";
    inputField.placeholder = "Add to your list";
    inputField.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && inputField.value.trim() !== "") {
        this.add(inputField.value.trim());
        inputField.value = "";
      }
    });
    const firstListItem = document.createElement("li");
    firstListItem.appendChild(inputField);
    listContainer.appendChild(firstListItem);

    this.tasks.forEach((task, index) => {
      const listItem = document.createElement("li");

      const checkbox = document.createElement("input");
      checkbox.classList.add('checkbox');
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;
      checkbox.addEventListener("change", (event) => {
        task.completed = event.target.checked;
        this.saveTasksToStorage();
        this.render();
      });
      listItem.appendChild(checkbox);
      const description = document.createElement("span");
      description.textContent = task.description;
      listItem.appendChild(description);
      const dots = document.createElement("span");
      dots.classList.add("dots");
      listItem.appendChild(dots);

      listContainer.appendChild(listItem);
    });

    const clearButton = document.createElement("button");
    clearButton.classList.add("clear-btn");
    clearButton.textContent = "Clear completed tasks";
    clearButton.addEventListener("click", () => {
      this.tasks = this.tasks.filter((task) => !task.completed);
      this.saveTasksToStorage();
      this.render();
    });
    const lastListItem = document.createElement("li");
    lastListItem.classList.add("clear-btn-container");
    lastListItem.appendChild(clearButton);
    listContainer.appendChild(lastListItem);
  }

  saveTasksToStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  getTasksFromStorage() {
    const tasksString = localStorage.getItem("tasks");
    if (tasksString) {
      return JSON.parse(tasksString);
    } else {
      return [];
    }
  }

  render() {
    this.displayToDoList();
  }
}

const todoList = new TodoList();
