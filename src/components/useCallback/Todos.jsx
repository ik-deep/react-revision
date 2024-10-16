import React, { memo } from 'react';


const Todos =({todos,addTodos})=>{
    console.log("this todo components also called dueto addTodo function props");

    return (
        <>
        <button onClick={addTodos}>Add todos</button>
        
            <ul>
              {
                todos.map((item)=>{
                    return (
                        <>
                        <li>{item}</li>
                        </>
                    )
              }
            ) }
            </ul>
            
          
        </>
    )
}

export default memo(Todos)