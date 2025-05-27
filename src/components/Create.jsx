
import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const Create = ({todo,setTodo}) => {

  const [title,setTitle] = useState("")

  const submitHandler = (e) =>{
    e.preventDefault();
    const newTodo = {
      id:nanoid(),
      title:title,
      isCompleted:false,
    }
    setTodo([...todo,newTodo]);
    setTitle("");
  }

  return (
    <>
    <h1>Create Task.</h1>  

      <form onSubmit={submitHandler}>
        <input type="text" value={title} placeholder='title' onChange={(e)=>setTitle(e.target.value)}/>
        <br />
        <br />
        <button>Create Todo.</button>
      </form>
    </>
  )
}

export default Create
