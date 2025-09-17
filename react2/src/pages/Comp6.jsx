import React, { useState } from 'react'

const Comp6 = () => {
  let [bgColor1, setBgColor1] = useState("white")

  
  let demo = (e)=>{
    // console.log("##########")
    e.preventDefault();
  }

  let demo2 = (e)=>{
    e.preventDefault();
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-12">
          <h1>Welcome</h1>
          {/* setBgColor() */}
          <input type='text' onBlur={()=>setBgColor1("white")} onFocus={()=>setBgColor1("red")} style={{backgroundColor : bgColor1}}/>
          <br />
          <br />
          <input onPaste={(e)=>demo2(e)} type='text' />
          <br />
          <br />
          <input type='text' onCopy={(e)=>demo(e)} />
        </div>
      </div>
    </div>
  )
}

export default Comp6