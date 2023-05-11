import clearCompletedTasks from "../clearChecked.js";
import { getTasks, setTasks } from "../storage.js";

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
    expect(getTasks()).toBe([
    { description: "Task 2", completed: false, index: 1 }]);
  });
});
