import React,{useState} from "react";
import Task from "./Task";
import uuid from 'react-uuid';



function TaskList({TASKS,selectedCategory}) {
  return (
    <div className="tasks">
      {TASKS.map((task)=>{
        if(selectedCategory =="All"){
        return  <Task key={uuid()}  category={task.category} text={task.text}/>
        } else {
          if(task.category == selectedCategory){
        return    <Task key={uuid()}  category={task.category} text={task.text}/>
          }
        }
      })}
    </div>
  );
}

export default TaskList;
