import React, { useState } from "react";
import axios, { Axios } from "axios";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";

import './App.css'
import { useEffect } from "react/cjs/react.development";

const App = () => {
  const [tasks, setTasks ] = useState([
    {
      id: '1',
      title: 'Estudar programação',
      completed: false
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true
    }
  ]);
  useEffect(() => {
    const fetchTasks = async () =>{

      const {data}  = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=20');
      setTasks(data)
    }
    fetchTasks();
  },[]) 

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) return {...task, completed: !task.completed}
      return task;
    });
    setTasks(newTasks);
  }
   
  

  const handleTaskAddition = (taskTitle) =>{
    const newTasks = [
      ...tasks, //três pontos significa tudo que está em Tasks
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false
      }
    ];
    setTasks(newTasks);
  }

  
  const handleRemoveTask = (taskId) => {
  const newTasks = tasks.filter(task => task.id !== taskId)
  setTasks(newTasks);

  
  }

  return (   
      <Router>
        <div className="container">
          <Header></Header>          
          <Route 
          path="/"            
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition}></AddTask>
              <Tasks 
                tasks={tasks} 
                handleTaskClick={handleTaskClick}
                handleRemoveTask={handleRemoveTask}>
              </Tasks>          
            </>
          )}
          ></Route>
          <Route path="/:taskTitle" exact component={TaskDetails}></Route>         
      </div>
      </Router>
     
    
  )
};

export default App;