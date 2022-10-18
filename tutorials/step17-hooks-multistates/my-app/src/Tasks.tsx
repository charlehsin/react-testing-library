import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TASKS_STORAGE_KEY: string = 'TASKS_STORAGE_KEY';

const storeTasks = (taskMap: any) => {
  localStorage.setItem(
    TASKS_STORAGE_KEY,
    JSON.stringify(taskMap)
  );
};

const readStoredTasks = () => {
  const storageData = localStorage.getItem(TASKS_STORAGE_KEY);

  return storageData ? JSON.parse(storageData) :
    { tasks: [], completedTasks: [] };
};

function Tasks() {
  const [taskText, setTaskText] = useState('');
  const storedTasks = readStoredTasks();
  const [tasks, setTasks] = useState((storedTasks as any).tasks);
  const [completedTasks, setCompletedTasks] = useState((storedTasks as any).completedTasks);

  useEffect(() => {
    storeTasks({ tasks, completedTasks });
  });

  const updateTaskText = (event: any) => {
    setTaskText(event.target.value);
  };

  const addTask = () => {
    setTasks([...tasks, { taskText, id: uuidv4() }]);
  };

  const completeTask = (completedTask: any) => () => {
    setCompletedTasks([...completedTasks, completedTask]);
    setTasks(tasks.filter((task: any) => task.id !== completedTask.id));
  };

  const deleteTask = (task: any) => () => {
    setCompletedTasks(completedTasks.filter((t: any) => t.id !== task.id));
  };

  console.log('tasks', tasks);
  console.log('completedTasks', completedTasks);

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