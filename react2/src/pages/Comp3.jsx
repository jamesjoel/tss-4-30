import React, { useState } from 'react'

const Comp3 = () => {

  let [x, setX] = useState(0)
  let [y, setY] = useState(0)

  let demo1 = ()=>{
    console.log("*********")
  }
  let demo2 = (e)=>{
    setX(e.clientX)
    setY(e.clientY-111)
  }
  let demo3 = ()=>{
    console.log("@@@@@@@@@")
  }

  return (
    <>
      <h1>Cursor Position - x : {x}, y : {y}</h1>
      <div  
        // onMouseOver={demo1}
        onMouseMove={(e)=>demo2(e)}
        // onMouseOut={demo3}
      style={{width : "50%", height : "500px", backgroundColor : "#ccc"}}></div>
    </>
  )
}

export default Comp3