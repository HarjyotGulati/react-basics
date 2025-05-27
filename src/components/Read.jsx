import React from 'react'

const Read = ({todo}) => {
  return (
    <div>
      <h1>Peding Todos</h1>
        <ol>
          {
            todo.map((todo)=>(
               <li key={todo.id}>{todo.title}</li>
            ))
          }
        </ol>    
    </div>
  )
}

export default Read;
