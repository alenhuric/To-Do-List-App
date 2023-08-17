import React, { useState } from 'react';
import { useTaskContext } from '../components/TaskContext';

function AddTaskForm() {
  const [newTask, setNewTask] = useState('');
  const { addTask } = useTaskContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      addTask({ id: Date.now(), title: newTask, completed: false });
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-2">
        <input
          className='p-2 bg-transparent border-2 rounded-md focus:outline-none'
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300' type="submit">
          Add Task
        </button>
      </div>
    </form>
  );
}

export default AddTaskForm;
