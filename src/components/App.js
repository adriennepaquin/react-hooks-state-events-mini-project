import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {
  const [taskArray, setTaskArray] = useState(TASKS)

  function removeTask(taskId){
    const updatedTasks = taskArray.filter(task => task.text !== taskId)
    setTaskArray(updatedTasks)
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categoryList={CATEGORIES}/>
      <NewTaskForm />
      <TaskList tasks={taskArray} removeTask={removeTask}/>
    </div>
  );
}

export default App;
