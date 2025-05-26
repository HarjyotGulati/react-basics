import React, { useState } from 'react'

const App = () => {

  const [todo,setTodo] = useState([{id:1,title:"kam karle bhai",isCompleted:false},])
  const [title,setTitle] = useState("")
  const [completed,setCompleted] = useState(false);
  const [gender,setGender] = useState("female")

  return (
    <div>
      <h1>Create Task.</h1>  
      <form>

        <input type="text" placeholder='title' onChange={(e)=>setTitle(e.target.value)}/>
        <br />

        <br />
        <input checked={completed} onChange={(e)=>setCompleted(e.target.checked)} type="checkbox"/> Completed
        <br /><br />

        <input checked={gender == "male"&&true} type='radio' onChange={(e)=>setGender(e.target.value)} /> Male
        <input checked={gender == "female"&&true} type="radio" onChange={(e)=>setGender(e.target.value)} /> Female
        <br />

        <br />
        <button>Create Todo.</button>
      </form>
    </div>
  )
}

export default App
