import React, { useState } from 'react'

const Comp7 = () => {

  let [gender, setGender] = useState("");
  let [a, setA] = useState("");
  let [city, setCity] = useState("No City")

  let [bgColor, setBgColor] = useState("gray");

  let demo = (e)=>{
    // console.log(e.target.value)
    if(e.target.value=="male"){
      setBgColor("blue")
    }
    else{
      setBgColor("pink")
    }
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-12">
          <h2>onChange in React</h2>
          <input type='text' value={a} onChange={(e)=>setA(e.target.value)} />
          <button onClick={()=>console.log(a)}>ok</button>
          <br />
          <br />
          
          Male <input type='radio' value="male" name="gender" onChange={(e)=>demo(e)}/>
          Female <input type='radio' value="female" name="gender" onChange={(e)=>demo(e)}/>
          
          
          <div style={{height : "200px", width : "200px", backgroundColor : bgColor}}></div>
          <br />
          <br />
          <select value={city} onChange={(e)=>setCity(e.target.value)}>
            <option>Select</option>
            <option>Indore</option>
            <option>Mumbai</option>
            <option>Pune</option>
          </select>
          <br />
          <h1>{city}</h1>
        </div>
      </div>
    </div>
  )
}

export default Comp7