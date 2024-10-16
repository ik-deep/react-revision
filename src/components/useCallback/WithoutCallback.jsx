import React, { useState } from "react";
import Todos from "./Todos";



function WithoutCallBack() {
    const [count,setCount] = useState(0);
    const [todos,setTodos] = useState([]);


    const addTodos=()=>{
        setTodos((p)=>[...p,"new Item"]);
    }

    return (
        <>
         <Todos todos={todos} addTodos={addTodos}/>
      
      <button onClick={()=>setCount(count+1)} >Increment(+)</button>
      <h1>{count}</h1>
     
        </>
    )
}

export default WithoutCallBack;