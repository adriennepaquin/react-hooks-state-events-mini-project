import React from "react";
import Task from "./Task"

function TaskList(props) {
  //console.log(props)
  const displayTasks = props.tasks.map((task) => <Task text={task.text} category={task.category} key={task.text} removeTask={props.removeTask}/>)

  return (
    <div className="tasks">
      {displayTasks}
    </div>
  );
}

export default TaskList;
