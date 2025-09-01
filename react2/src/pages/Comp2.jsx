import React, { useState } from 'react'

const Comp2 = () => {

    let [x, setX] = useState("");

    let clickHandler = (a)=>{
        // console.log(a.target)
        setX(a.target.tagName);
    }

  return (
    <div className="container my-4">
        <button onClick={(x)=>clickHandler(x)}>
            OK
        </button>

        <div onClick={(y)=>clickHandler(y)} style={{height : "200px", width : "200px", backgroundColor : "red"}}></div>


        <p onClick={(e)=>clickHandler(e)}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum consectetur nihil eaque mollitia enim, odit soluta sint eos distinctio reiciendis repudiandae odio corrupti cum veniam libero esse iusto? Id, natus.</p>
        <h2>your clicked tag name is : {x}</h2>
    </div>
  )
}

export default Comp2