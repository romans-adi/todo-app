import removeTask from '../remove';
import { setTasks, getTasks } from '../storage';

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
