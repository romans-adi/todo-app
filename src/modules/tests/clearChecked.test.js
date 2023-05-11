import clearCompletedTasks from "../clearChecked.js";
import changeDescription from "../changeDescription.js";
import addTask from "../add.js";
import { getTasks, setTasks } from "../storage.js";
import expect from "expect";


jest.mock('../storage', () => {
  let tasks = [];
  return {
    setTasks: (newTasks) => {
      tasks = newTasks;
    },
    getTasks: () => tasks,
  };
});

describe("clearCompletedTasks", () => {
  it("should remove completed tasks from storage and update their indices", () => {
    setTasks([{ description: 'Task 1', completed: true, index: 1 }, { description: 'Task 2', completed: false, index: 2 }]);
    expect(getTasks()).toHaveLength(2);
    clearCompletedTasks();
    expect(getTasks()).toHaveLength(1);
    expect(getTasks()[0]).toEqual({ description: "Task 2", completed: false, index: 1 });
  });
});

describe("changeDescription", () => {
  beforeEach(() => {
    setTasks([]);
  });
  it('should change task desription', () => {
    document.body.innerHTML = `
    <ul id="task-list">
    </ul>
  `;
  const container = document.getElementById('task-list');
  const addListInput = document.createElement('li');
  const inputField = document.createElement('textarea');
  const inputField2 = document.createElement('textarea');
  addListInput.appendChild(inputField);
  container.appendChild(addListInput);
  const task1Description = 'Test task 1';
  addTask(task1Description);
  inputField.value = task1Description;
  const task2 = "Test task 2"
  inputField2.value = task2;
  expect(getTasks()[0].description).toBe("Test task 1")
  changeDescription(getTasks()[0], inputField2);
  expect(getTasks()[0].description).toBe("Test task 2");
  
  })
});