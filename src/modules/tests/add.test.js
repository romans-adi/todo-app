import addTask from '../add';
import { setTasks, getTasks } from '../storage';

jest.mock('../storage', () => ({
  getTasks: jest.fn(() => []),
  setTasks: jest.fn(),
}));

describe('addTask', () => {
  it('should add a task to the tasks array', () => {
    addTask('Test task');
    expect(getTasks).toHaveBeenCalledTimes(1);
    expect(setTasks).toHaveBeenCalledTimes(1);
    expect(setTasks).toHaveBeenCalledWith([
      {
        description: 'Test task',
        completed: false,
        index: 1,
      },
    ]);
  });
});
