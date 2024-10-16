import React, { createContext, useState } from "react";

export const counterContext = createContext();

export default function CounterProvider({children}){
    const [count,setCount] = useState(0);

    const Increament = () =>{
        setCount(count+1);
    }

    const Decreament = () =>{
        setCount(count-1); 
    }


    return (
        <counterContext.Provider
        value={{count,Increament,Decreament}}>
            {children}
        </counterContext.Provider>

    )
}