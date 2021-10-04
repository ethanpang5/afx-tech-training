import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { AddToDo } from './AddToDo';
import { Todo } from './Todo';

function App() {

  const [tasks, setTasks] = useState(Array())
  const [taskID, setTaskID] = useState(1)

  const deleteTask = (taskId: number) => {
    let newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

  function createTask(taskTitle: string) {
    let newTask = {
                  element: <Todo 
                  title={taskTitle} 
                  complete={false} 
                  id={taskID}
                  deleteTask={deleteTask}/>,
                  id: taskID
                }
    let newTasks = tasks.concat([newTask])
    setTasks(newTasks)
    setTaskID(taskID + 1)
  }

  function displayTasks() {
    let elements = tasks.map(task => task.element)
    return elements
  }

  return (
    <div className="App">
      <Header/>
      <AddToDo createTask={createTask}/>
      <div className="tasks">
          {displayTasks()}
      </div>
      
    </div>
  );
}

export default App;
