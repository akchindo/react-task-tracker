import React, { useState } from "react";
import Task from "./Task";

const Tasks = ({ tasks , onDelete, onToggle }) => {
  return (
    <div>
      {
        tasks.map((task, index) => (
            <Task key={task.id} task={task} del={ onDelete } onToggle={onToggle} />
        ))
      }
    </div>
  )
}

export default Tasks;
