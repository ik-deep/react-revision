import React,{createContext,useState} from 'react'

export const TodoContext = createContext();

export default function TodoProvider({children}){
    const [todos, setTodos] = useState([])

  const addTodos=(title)=>{
    const temp = [...todos];
    temp.push({title});
      setTodos(temp);
  }

  const deleteTodo=(index)=>{
      const temp = [...todos]
      temp.splice(index,1);
           setTodos(temp);
  }
  return <TodoContext.Provider value={{
    todos,
    addTodos,
    deleteTodo
  }}>
    {children}
  </TodoContext.Provider>
}

