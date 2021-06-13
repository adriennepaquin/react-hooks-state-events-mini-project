import React from "react";

function Task(props) {
  return (
    <div className="task">
      <div className="label">{props.category}</div>
      <div className="text">{props.text}</div>
      <button id={props.text} className="delete" onClick={() => props.removeTask(props.text)}>X</button>
    </div>
  );
}

export default Task;
