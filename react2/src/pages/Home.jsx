import React from 'react'

const Home = () => {

  let color = "Red"
  let a = 100;
  let obj = { name : "rohit", age : 20 }

  let arr = ["indore", "pune", "delhi", "bhopal", "mhow", "dewas", "ujjain"]

  return (
    <>
    <h1>{color}</h1>
      <div>Home</div>
      {
        arr.map(item=>{
          return(
          <>
          <h3>{item}</h3>
          
          </>
        )
        })
      }
      

      <br />
      <br />
      <select>
        <option>Select</option>
        {
          arr.map(item=><option>{item}</option>)
        }
      </select>
    </>
  )
}

export default Home


/*

  let demo = a =>"hello";


  let demo = (a)=>{
    return "hello";
    }

*/