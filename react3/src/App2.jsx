import React, { useState } from 'react'
/*
    What is Hooks ---- The hooks are spacila fun in react, it name always start with "use" keyword. The hooks is used for changes "State".


*/

const App2 = () => {

    let [h, setH] = useState(200);
    let [w, setW] = useState(200);
    let [a, setA] = useState(10);
    
    let handleMouseOver = ()=>{
        setA((currA)=>{
            return currA*5;
        })
    }
    let handleMouseOut = ()=>{
        setA(currA=>currA/2);
    }

    let [checkH, setCheckH] = useState(true);
    let handleMove = ()=>{
        if(h > 600){
            setCheckH(false);
        }
        if(checkH==true){
            setH(++h)
            setW(++w)
        }else{
            setH(--h)
            setW(--w)
        }
    }

    let handleOut = ()=>{
        setH(200)   
        setW(200)   
    }

  return (
    <>
        <h1>Welcome</h1>
        <h2>Height : {h} Width : {w} Check : {checkH ? "true" : "false"}</h2>
        {/* <h2 style={{backgroundColor : "pink"}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{a}</h2> */}

        <br />
        <div onMouseMove={handleMove} style={{ backgroundColor : "black", height : h+"px", width : w+"px"}}></div>

    </>
  )
}

export default App2