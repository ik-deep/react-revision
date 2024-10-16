import { useState } from "react";

const useCounter = () =>{
    const [count,setCount] = useState(0);

    return {
        count,
        INC: () =>{setCount(count+1)},
        DEC: () => {setCount(count-1)}
    }
}

export default useCounter;