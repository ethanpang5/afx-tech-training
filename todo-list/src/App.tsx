import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { AddToDo } from './AddToDo';
import { Todo } from './Todo';

function App() {

  const [tasks, setTasks] = useState(Array())

  function createTask(taskTitle: string) {
    let newTask = <Todo title={taskTitle} complete={false}/>
    let newTasks = tasks.concat([newTask])
    setTasks(newTasks)
  }

  const markComplete = () => {

  }

  return (
    <div className="App">
      <Header/>
      <AddToDo createTask={createTask}/>
      <div className="tasks">
        {tasks}
      </div>
      
    </div>
  );
}

export default App;
