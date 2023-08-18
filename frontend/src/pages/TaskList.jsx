import React from 'react';
import { useTaskContext } from '../components/TaskContext';

function TaskList() {
  const { tasks, toggleTaskCompletion, deleteTask } = useTaskContext();

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <div className="grid grid-cols-4 gap-10 mt-10">
            {/* Checkbox */}
            <label className="flex items-center space-x-4 cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                  className="hidden"
                />
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <div
                    className={`w-6 h-6 rounded-full ${
                      task.completed ? 'bg-green-500' : 'bg-transparent'
                    }`}
                  ></div>
                </div>
              </div>
            </label>
            
            {/* Task title */}
            <span
              className={`mt-2 col-span-2 font-medium text-lg ${
                task.completed ? 'line-through text-gray-500' : ''
              } mr-4 overflow-hidden`}
            >
              {task.title.length <= 35 ? (
                task.title
              ) : (
                <>
                  {task.title.slice(0, 32)}&hellip;
                </>
              )}
            </span>
            
            {/* Delete button */}
            <button
              className="text-center inline-block px-5 py-2 w-max text-base font-medium rounded-md text-white bg-red-300 hover:bg-red-400 active:bg-red-300 focus:outline-none focus:ring focus:ring-red-300"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
