import React, { useEffect, useState } from 'react'
import { FaTrash } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import styles from "../style/ToDoList.module.css"

export default function ToDoList() {
   const [activity,setActivity]=useState(() => {
  const savedData = localStorage.getItem("tasks");
  return savedData ? JSON.parse(savedData) : [];
});
useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(activity));
}, [activity]);

   function handleSubmit(e){
    e.preventDefault();
    const value = e.target.elements.todo.value;
    if (!value.trim()) return;
    setActivity([
    ...activity,
    {
      text: value,
      completed: false
    }]);
    e.target.reset();
   }
   function handleDelete(index){
    const updateList=activity.filter((item,i)=>i!==index);
    setActivity(updateList);
   }
   function handleCheck(index){
  const updatedList = activity.map((item, i) => {
    if (i === index) {
      return {
        ...item,
        completed: !item.completed
      };
    }
    return item;
  });

  setActivity(updatedList);
}
function handleReset() {
  setActivity([]);
  localStorage.removeItem("tasks");
}
  return (
    <div>
     <div className={styles.Container}>
      <div className={styles.todoText}>
       <h1>To-Do List</h1>
       </div>
      <form className={styles.inputSection} onSubmit={handleSubmit}>
        <input placeholder='Enter your task' name='todo'></input>
        <button type='submit'>Add</button> 
      </form>
      {activity.map((value,index)=>{
        return(
        <div key={index} className={styles.itemList}>
         <input
        type="checkbox"
        checked={value.completed}
        onChange={()=>handleCheck(index)}
      />

      <p
        style={{
          textDecoration: value.completed
            ? "line-through"
            : "none",
            textDecorationColor: value.completed ? "black" : "initial",
            textDecorationThickness: ".1rem"
        }}
      >
        {value.text}
      </p>
          <FaTrash className={styles.deleteIcon} onClick={()=>handleDelete(index)}/>
        </div>  
        )
      })}
      {activity.length > 0 && (
  <button onClick={handleReset} className={styles.clearBtn}>
    Clear All
  </button>
)}
     </div>
    </div>
  )
}
