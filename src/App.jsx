import Create from './components/Create'
import Read from './components/Read'
import { useState } from 'react'

const App = () => {

    const [todo,setTodo] = useState([{id:1,title:"kam karle bhai",isCompleted:false},])

  return (
    <> 
    <Create todo={todo} setTodo={setTodo}/>
    <Read todo={todo}/>
    </>
  )
}

export default App
