import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext';

const Todo = ({todo,index}) => {
   const {deleteTodo} =  useContext(TodoContext);

  return (

        <div className='todo'>
                <h3>Id:{index+1}</h3>
                <p>{todo.title}</p>
                <div className='buttons'>
                    <button >Edit</button>
                    <button onClick={()=> deleteTodo(index)}>Delete</button>
                </div>
            </div>

  )
}

export default Todo
