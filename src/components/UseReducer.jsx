import React, { useReducer, useState } from 'react'

const ActionsType ={
    INC:"INC",
    DEC:"DEC",
    ADD_BY_10:"ADD_BY_10",
    ADD_BY_INPUT:"ADD_BY_INPUT",
}

const reducer = (state,actions) =>{
    switch(actions.type){
        case ActionsType.INC:
            return {...state,count:state.count+1};
        case ActionsType.DEC:
            return {...state,count:state.count-1};
        case ActionsType.ADD_BY_10:
            return {...state,count:state.count+10};
        case ActionsType.ADD_BY_INPUT:
            return {...state,count:state.count+parseInt(actions.payload,10)};
        default:
            return state;
    }
}

const UseReducer = () => {
    const [state,despatch] = useReducer(reducer, {count:0});
    const [addBy,setAddBy] = useState(0);

    const increament=()=>{
        despatch({type:ActionsType.INC});
    }
    const decreament=()=>{
        despatch({type:ActionsType.DEC});
    }
    const addBy10=()=>{
        despatch({type:ActionsType.ADD_BY_10});
    }
    const addByInput=()=>{
        despatch({type:ActionsType.ADD_BY_INPUT,payload:addBy});
    }
  return (
    <div>
      <button type='button' onClick={increament}>Increament(+1)</button>
      <p>{state.count}</p>
      <button type='button' onClick={decreament}>Decreament(-1)</button><br></br>
      <button type='button' onClick={addBy10}>Add By 10</button><br></br>
      <input type='number' value={addBy} onChange={e=>setAddBy(e.target.value)}/><br></br>
      <button type='button' onClick={addByInput}>Add By:{addBy}</button>
    </div>
  )
}

export default UseReducer
