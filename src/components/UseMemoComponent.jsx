import React, { useMemo, useState } from 'react'

const UseMemoComponent = () => {
    const [count,setCount]= useState(0);
    const [name,setName]= useState('');

    const increament=()=>{
        setCount(count+1);
    }

    const getMulti = ()=>{
      for(let i=0;i<1000;i++){
        console.log(i);
      }
      return count*10;
    }

    const numberValue = useMemo(()=>getMulti(),[count]);
  
  return (
    <div>
        <div>
        <input type="text" value={name} onChange={e=> setName(e.target.value)}/>
        </div>
<br/>
      <button onClick={increament}>Increament(+1)</button>
      <p>{numberValue}</p>
    </div>
  )
}

export default UseMemoComponent
