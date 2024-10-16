import React from 'react'

const ChildMemo = ({count}) => {

    console.log("child memo is called");
  return (
    <div>
      <p>{count}</p>
    </div>
  )
}

export default ChildMemo
