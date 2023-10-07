import React,{useState} from "react";
import uuid from 'react-uuid';


function NewTaskForm({CATEGORIES,TASKS,setTasks}) {
  const [selectedCategory,SetSelectedCategory]=useState("")
  const[array,setArray]=useState(TASKS)
  const [task,setTask]=useState("")
  function addElement(element) {
    setArray([...array, element]);
    setTasks(array)
  }

  const onTaskFormSubmit=(e)=>{
    e.preventDefault()
   const newTask={
    text: task,
   category: selectedCategory
  }
  addElement(newTask)
  }
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input value ={task} onChange={(e)=>{setTask(e.target.value)}} type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {CATEGORIES.map(category=>{
            if(category=="All"){
              return;
            }else{
              return <option   onChange={(e)=>{SetSelectedCategory(e.target.value)}} key={uuid()}>{category}</option>

            }
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
