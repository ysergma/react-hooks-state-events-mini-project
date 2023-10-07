import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks,setTasks]=useState(TASKS)
  const [selectedCategory,SetSelectedCategory]=useState("")
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter CATEGORIES={CATEGORIES} SetSelectedCategory={SetSelectedCategory} selectedCategory={selectedCategory}/>
      <NewTaskForm CATEGORIES={CATEGORIES} TASKS={tasks} setTasks={setTasks}/>
      <TaskList TASKS={tasks}  selectedCategory={selectedCategory} SetSelectedCategory={SetSelectedCategory}/>
    </div>
  );
}

export default App;
