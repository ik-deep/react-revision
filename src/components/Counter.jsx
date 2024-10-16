import React, { useContext } from "react";
import { counterContext } from "../contexts/CounterContext";
import { INC } from "../redux/ActionTypes";

const Counter = () =>{
    const {count,Increament, Decreament} = useContext(counterContext);
    console.log(count,Increament)

    return (
        <>
        <h2 onClick={()=>Increament}>+</h2>
        <h1>{count}</h1>
        <h2  onClick={()=>Decreament}>-</h2 >
        </>
    )
}

export default Counter;