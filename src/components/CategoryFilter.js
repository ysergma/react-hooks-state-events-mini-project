import React,{useState} from "react";
import uuid from 'react-uuid';

function CategoryFilter({CATEGORIES,SetSelectedCategory,selectedCategory}) {
  const [selectedButton, setSelectedButton] = useState("");
  const handleClick = (category) => {
    SetSelectedCategory(category);
    setSelectedButton(category);
  };
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map(category=>(
        <button         className={category === selectedButton ? 'selected' : ''}
        key={uuid()} onClick={() => handleClick(category)}
        >{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
