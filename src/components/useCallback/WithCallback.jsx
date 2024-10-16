import React, { useCallback, useState } from "react";
import Todos from "./Todos";


const WithCallBack = () =>{
    const [count,setCount] = useState(0);
    const [todos,setTodos] = useState([]);


    const addTodos = useCallback(()=>{
        setTodos((p)=>[...p,"new Item"]);
    },[todos])

    return (
        <>
         <Todos todos={todos} addTodos={addTodos}/>
      
      <button onClick={()=>setCount(count+1)} >Increment(+)</button>
      <h1>{count}</h1>
     
        </>
    )
}

export default WithCallBack;