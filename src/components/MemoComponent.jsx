import React, { memo, useMemo, useState } from 'react'
import ChildMemo from './ChildMemo';

const MemoUseCompomnent = memo(ChildMemo); 

function MemoComponent() {
    const [count,setCount]= useState(0);
    const [name,setName]= useState('');

    const increament=()=>{
        setCount(count+1);
    }
  
  return (
    <div>
      <input type="text" value={name} onChange={e=> setName(e.target.value)}/>
      <button onClick={increament}>Increament(+1)</button>
      <MemoUseCompomnent count={count}/>
    </div>
  )
}

export default MemoComponent
