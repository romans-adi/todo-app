import addTask from '../add';
import removeTask from '../remove';
import { setTasks, getTasks } from '../storage';

describe('addTask', () => {
  beforeEach(() => {
    setTasks([]);
  });
  it('should add a task to the tasks array', () => {
    const description = 'Test task';
    addTask(description);
    const tasks = getTasks();

    expect(tasks).toHaveLength(1);
    expect(tasks[0].description).toBe(description);
    expect(tasks[0].completed).toBeFalsy();
    expect(tasks[0].index).toBe(1);
  });
});

describe('removeTask', () => {
  beforeEach(() => {
    setTasks([]);
  });
  it('should remove a task from the tasks array', () => {
    setTasks([{ description: 'Task 1', completed: false, index: 1 }, { description: 'Task 2', completed: false, index: 2 }]);
    console.log('Tasks before removing:', getTasks());
    removeTask(0);
    console.log('Tasks after removing:', getTasks());
    expect(getTasks()).toHaveLength(1);
    expect(getTasks()[0].index).toBe(1);
  });
});
