import React from 'react'

const Weather = () => {

  let clickHandler = ()=>{
    console.log("***********")
  }
  let doubleClickHandler = ()=>{
    console.log("###########");
  }

  return (
    <div className="container my-5">
      <br />
      <button onClick={clickHandler} onDoubleClick={doubleClickHandler} className='btn btn-info'>OK</button>
    </div>
  )
}

export default Weather