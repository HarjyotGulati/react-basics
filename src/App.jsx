import { nanoid } from 'nanoid'
import React, { useState } from 'react'

const App = () => {

  const [todo,setTodo] = useState([{id:1,title:"kam karle bhai",isCompleted:false},])
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
    <div>
      <h1>Create Task.</h1>  

      <form onSubmit={submitHandler}>
        <input type="text" value={title} placeholder='title' onChange={(e)=>setTitle(e.target.value)}/>
        <br />
        <br />
        <button>Create Todo.</button>
      </form>
      <h1>All Todo</h1>
        <ol>
          {
            todo.map((todo)=>{
              return <li key={todo.id}>{todo.title}</li>
            })
          }
        </ol>    
    </div>
  )
}

export default App
