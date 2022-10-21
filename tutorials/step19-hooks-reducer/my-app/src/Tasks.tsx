import React, { useState, useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialTasksState = {
  tasks: [],
  completedTasks: []
};

const TYPES = {
  ADD_TASK: 'ADD_TASK',
  COMPLETE_TASK: 'COMPLETE_TASK',
  DELETE_TASK: 'DELETE_TASK'
};

const tasksReducer = (state: any, action: any) => {
  switch (action.type) {
    case TYPES.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.task]
      };
    case TYPES.COMPLETE_TASK:
      const { completedTask } = action;
      return {
        ...state,
        completedTasks: [...state.completedTasks, completedTask],
        tasks: state.tasks.filter((t: any) => t.id !== completedTask.id)
      };
    case TYPES.DELETE_TASK:
      return {
        ...state,
        completedTasks: state.completedTasks.filter((t: any) => t.id !== action.task.id)
      };
    default:
      return state;
  }
};

const TASKS_STORAGE_KEY: string = 'TASKS_STORAGE_KEY';

const storeTasks = (taskMap: any) => {
  localStorage.setItem(
    TASKS_STORAGE_KEY,
    JSON.stringify(taskMap)
  );
};

const readStoredTasks = () => {
  const storageData = localStorage.getItem(TASKS_STORAGE_KEY);

  return storageData ? JSON.parse(storageData) : initialTasksState;
};

function Tasks() {
  const [taskText, setTaskText] = useState('');
  const storedTasks = readStoredTasks();

  const [state, dispatch] = useReducer(tasksReducer, storedTasks);
  const { tasks, completedTasks } = state;

  useEffect(() => {
    storeTasks({ tasks, completedTasks });
  });

  const updateTaskText = (event: any) => {
    setTaskText(event.target.value);
  };

  const addTask = () => {
    dispatch({ type: TYPES.ADD_TASK, task: { taskText, id: uuidv4() } });
  };

  const completeTask = (completedTask: any) => () => {
    dispatch({ type: TYPES.COMPLETE_TASK, completedTask });
  };

  const deleteTask = (task: any) => () => {
    dispatch({ type: TYPES.DELETE_TASK, task });
  };

  return (
    <div>
      <h3>Tasks</h3>
      <div className='form'>
        <input value={taskText} onChange={updateTaskText} aria-label='taskName' />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='task-list'>
        {
          tasks.map((task: any) => {
            const { id, taskText } = task;

            return (
              <div key={id} onClick={completeTask(task)}>
                {taskText}
              </div>
            );
          })
        }
      </div>
      <div className='completed-list'>
        {
          completedTasks.map((task: any) => {
            const { id, taskText } = task;

            return (
              <div key={id}>
                {taskText}{' '}
                <span onClick={deleteTask(task)} className='delete-task'>x</span>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Tasks;