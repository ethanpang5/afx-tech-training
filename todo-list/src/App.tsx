import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { AddToDo } from './AddToDo';
import { Todo } from './Todo';

function App() {

  const [tasks, setTasks] = useState(Array())
  const [taskID, setTaskID] = useState(1)

  const deleteTask = (taskId: number) => {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

  const createTask = (taskTitle: string) => {
    const i = taskID
    const newTask = {
                      title: taskTitle,
                      complete: false, 
                      id: i,
                      key: i    
                    }
    const newTasks = tasks.concat(Array(newTask))
    setTasks(newTasks)
    setTaskID(taskID + 1)
  }


  return (
    <div className="App">
      <Header/>
      <AddToDo createTask={createTask}/>
      <div className="tasks">
          {tasks.map(task => <Todo
                              title={task.title}
                              complete={task.complete}
                              id={task.id}
                              deleteTask={deleteTask}
                              key={task.id}
                            />)}
      </div>
      
    </div>
  );
}

export default App;
