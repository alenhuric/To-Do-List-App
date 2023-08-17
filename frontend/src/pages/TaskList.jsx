import React from 'react';
import { useTaskContext } from '../components/TaskContext';

function TaskList() {
  const { tasks, toggleTaskCompletion, deleteTask } = useTaskContext();

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <div class="grid grid-cols-3 gap-10 mt-10">
            {/* <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
              className='p-2 mr-10 bg-transparent border-2 rounded-md focus:outline-none'
            /> */}

<label className="flex items-center space-x-4 cursor-pointer">
  <div className="relative">
    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => toggleTaskCompletion(task.id)}
      className="hidden"
    />
    <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-110 focus-within:ring-2 focus-within:ring-blue-500">
      <div
        className={`w-6 h-6 rounded-full ${
          task.completed ? "bg-green-500" : "bg-transparent"
        }`}
      ></div>
    </div>
  </div>
</label>








            {/* <span className="mr-10 max-w-[30ch] ">
              {task.title.length <= 30 ? (
                task.title
              ) : (
                <>
                  {task.title.slice(0, 27)}&hellip;
                </>
              )}
            </span> */}

<span className={`font-medium text-lg ${
      task.completed ? "line-through text-gray-500" : ""
    } mr-4 max-w-[30ch] truncate`}>
  {task.title}
</span>





            <button className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-red-300 hover:bg-red-400 active:bg-red-300 focus:outline-none focus:ring focus:ring-red-300' onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
