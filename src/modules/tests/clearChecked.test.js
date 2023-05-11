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
    const tasks = [
      { description: "Task 1", completed: true },
      { description: "Task 2", completed: false },
      { description: "Task 3", completed: true },
    ];
    getTasks.mockReturnValue(tasks);
    clearCompletedTasks();
    expect(getTasks).toHaveBeenCalledTimes(1);
    expect(setTasks).toHaveBeenCalledTimes(1);
    expect(setTasks).toHaveBeenCalledWith([
      { description: "Task 2", completed: false, index: 1 },
    ]);
  });
});
