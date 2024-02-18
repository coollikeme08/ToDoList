import { useState } from 'react'

import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const addTask = () => {
    if (inputValue.trim() !== '') {
      if (editIndex === -1) {
        setTasks([...tasks, inputValue]);
      } else {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = inputValue;
        setTasks(updatedTasks);
        setEditIndex(-1);
      }
      setInputValue('');
    }
  };

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    if (index === editIndex) {
      setEditIndex(-1);
    }
  };

  const editTask = index => {
    setInputValue(tasks[index]);
    setEditIndex(index);
  };

  const updateTask = () => {
    if (inputValue.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = inputValue;
      setTasks(updatedTasks);
      setInputValue('');
      setEditIndex(-1);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={addTask}>{editIndex === -1 ? 'Add Task' : 'Update Task'}</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                />
                <button onClick={updateTask}>Update</button>
              </>
            ) : (
              <>
                {task}{' '}
                <button onClick={() => editTask(index)}>Edit</button>
                <button onClick={() => removeTask(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;