import React, { useState } from "react";
import useCounter from "./customHooks/useCounter";


const UseCounter = () =>{
    
    const {count,INC,DEC} = useCounter();
    console.log(count, INC, DEC)

    return (
        <>
        <p>count: {count}</p>
        <button onClick={INC}>+</button>
        <button onClick={DEC}>-</button>
        </>
    )
}

export default UseCounter;