import React, {useState} from 'react'

const Contact = () => {
  
  let [a , setA] = useState(10)

  let [name, setName] = useState("Rohit");
  // name = "Rohit"

  let hello = ()=>{
    console.log("welcome")
    // a = 20
    setA(20)
    setName("gaurav")
    // name = "gaurav"
  }  
  
  return (
    <>
    <div className="container my-4">
        <h2>Contact</h2>
        <button onClick={ hello } className='btn btn-success'>OK</button>
        <h1>{a}</h1>
        <h1>{name}</h1>
    </div>
    </>
  )
}

export default Contact