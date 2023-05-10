const addTask = () => '../modules/add';
const render = () => '../modules/render';
let getTasks = () => '../modules/storage';
let setTasks = () => '../storage.js'

getTasks = jest.fn();

jest.mock('../modules/storage.js', () => ({
  __esModule: true,
  default: jest.fn(),
  getTasks: jest.fn(),
  setTasks: jest.fn(),
}));

describe('addTask', () => {
  beforeEach(() => {
    setTasks = jest.fn();
    setTasks.mockClear();
  });

  it('should add a task to the tasks array', () => {
    // Set the mock value for getTasks
    let mockTasks = [];
    getTasks.mockReturnValue(mockTasks);

    addTask('New task');
    expect(setTasks).toHaveBeenCalledWith([
      {
        description: 'New task',
        completed: false,
        index: 1,
      },
    ]);
  });

  it('should add multiple tasks to the tasks array', () => {
    // Set the mock value for getTasks
    const mockTasks = [
      {
        description: 'Task 1',
        completed: false,
        index: 1,
      },
    ];
    getTasks.mockReturnValue(mockTasks);

    addTask('Task 2');
    expect(setTasks).toHaveBeenCalledWith([
      {
        description: 'Task 1',
        completed: false,
        index: 1,
      },
      {
        description: 'Task 2',
        completed: false,
        index: 2,
      },
    ]);
  });

  it('should trim whitespace from the task description', () => {
    // Set the mock value for getTasks
    let mockTasks = [];
    getTasks.mockReturnValue(mockTasks);

    addTask('  New task  ');
    expect(setTasks).toHaveBeenCalledWith([
      {
        description: 'New task',
        completed: false,
        index: 1,
      },
    ]);
  });
});
