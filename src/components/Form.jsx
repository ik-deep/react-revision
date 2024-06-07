import React, { useContext, useState } from 'react'
import { TodoContext } from '../contexts/TodoContext';
import useCustomeHook from './useCustomeHook';

const Form = () => {
const {addTodos} = useContext(TodoContext);
const [name,setName] = useCustomeHook('',"name");
const [title, setTitle]=useState('',"title");

const handleSubmit=(e)=>{
e.preventDefault();
addTodos(title);
setTitle('');
}



  return (
    <div>
        <h1>TodoList.</h1> 
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)}></input>
      <form onSubmit={handleSubmit}>
        <input value={title} type='text' onChange={e=> setTitle(e.target.value)} placeholder='Enter title
        '/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form
