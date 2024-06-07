import React, { useContext } from 'react'
import Todo from './Todo'
import { TodoContext } from '../contexts/TodoContext'

const List = () => {
  const {todos} = useContext(TodoContext);
  return (
    <div className='list'>
      <h2>All Todos</h2>
      <div className='todos'>
        {
            todos.map((todo,index)=>(
              <Todo todo={todo} index={index} key={index}/>
            ))
        }
      
        
      </div>
    </div>
  )
}

export default List
