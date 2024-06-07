import React from 'react'
import * as Actions from '../redux/ActionTypes'
import { useDispatch, useSelector } from 'react-redux';

const Redux = () => {
   const {counter} = useSelector((state)=>state.counter);
    const [addBy,setAddBy]=React.useState(0);
    const dispatch = useDispatch();

     const increament = () =>{
         dispatch({type:Actions.INC})
     }
     const decreament = () =>{
         dispatch({type:Actions.DEC})
     }
     const addBy10 = () =>{
         dispatch({type:Actions.ADD_BY_10})
     }
     const addByInput = () =>{
         dispatch({type:Actions.ADD_BY_INPUT,payload:addBy})
     }
   

  return (
    <div>
        <h1>Redux</h1>
    <button type='button' onClick={increament}>Increament(+1)</button>
    <p>{counter}</p>
    <button type='button' onClick={decreament}>Decreament(-1)</button><br></br>
<p><button type='button' onClick={addBy10}>Add By 10</button>
</p>
    <p>
    <input type='number' value={addBy} onChange={e=>setAddBy(e.target.value)}/><br></br>
    </p>
  
    <button type='button' onClick={addByInput}>Add By:{addBy}</button>
  </div>
  )
}

export default Redux
