import Create from './components/Create'
import Read from './components/Read'
import { useState } from 'react'

const App = () => {

    const [todo,setTodo] = useState([])

  return (
    <> 
    <Create todo={todo} setTodo={setTodo}/>
    <Read todo={todo} setTodo={setTodo}/>
    </>
  )
}

export default App
